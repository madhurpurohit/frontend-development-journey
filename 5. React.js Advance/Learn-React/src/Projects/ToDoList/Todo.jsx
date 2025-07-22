import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoDate } from "./TodoDate";
import { TodoList } from "./TodoList";
import { TodoClear } from "./TodoClear";
import { getLocalStorageData, setLocalStorageData } from "./TodoLocalStorage";

export const TodoApp = () => {
  const [task, setTask] = useState(() => getLocalStorageData());

  function handleFormSubmit(inputValue) {
    const { id, content, checked } = inputValue;

    if (!content) return;

    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );

    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
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
            {task.map((curElem) => {
              return (
                <TodoList
                  key={curElem.id}
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
