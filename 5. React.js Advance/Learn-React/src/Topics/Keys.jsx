import { useState } from "react";
import "../Projects/ToDoList/Todo.css";
import { TodoDate } from "../Projects/ToDoList/TodoDate";
import { TodoClear } from "../Projects/ToDoList/TodoClear";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../Projects/ToDoList/TodoLocalStorage";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { TodoForm } from "../Projects/ToDoList/TodoForm";

export const Keys = () => {
  const [task, setTask] = useState(() => getLocalStorageData());

  function handleFormSubmit(inputValue) {
    const { id, content, checked } = inputValue;

    if (!content) return;

    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );

    if (ifTodoContentMatched) return;

    //* If we add task in this type than it will not work fine.
    setTask((prevTask) => [{ id, content, checked }, ...prevTask]);

    //* If we add task in this type than it will work fine
    // setTask((prevTask) => [...prevTask, { id, content, checked }]);
  }

  setLocalStorageData(task);

  //* Method2:- Works well with React's re-rendering system
  function handleDeleteButton(value) {
    const updateTask = task.filter((curElem) => curElem.content !== value);
    setTask(updateTask);
  }

  function handleCheckButton(content) {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });

    setTask(updatedTask);
  }

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <TodoDate />
        </header>

        <TodoForm onFormSubmit={handleFormSubmit} />

        <section className="myUnOrdList">
          <ul className="todo-list">
            {task.map((curElem, index) => {
              return (
                <TodoList
                  key={index}
                  data={curElem.content}
                  checked={curElem.checked}
                  onHandleDeleteButton={handleDeleteButton}
                  onHandleCheckButton={handleCheckButton}
                />
              );
            })}
          </ul>
        </section>

        <TodoClear onSetTask={setTask} />
      </section>
    </>
  );
};

function TodoList({
  data,
  checked,
  onHandleDeleteButton,
  onHandleCheckButton,
}) {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <input
        type="text"
        autoComplete="off"
        style={{ backgroundColor: "#ccc" }}
      />
      <button className="check-btn" onClick={() => onHandleCheckButton(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteButton(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
}
