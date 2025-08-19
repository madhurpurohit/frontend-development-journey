import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addTask, clearTask, deleteTask } from "../store";

export const Todo = () => {
  const [task, setTask] = useState("");

  //* To get access of the state from store.
  const tasks = useSelector((state) => state.taskReducer.task); // It will give us the state from the global stores.
  // console.log(tasks);

  //* To dispatch or perform action on store like add or delete.
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    return setTask("");
  };

  const handleDeleteButton = (id) => {
    dispatch(deleteTask(id));
  };

  const handleClearButton = () => {
    dispatch(clearTask());
  };

  return (
    <div className="flex min-h-screen max-w-screen items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 tracking-wider text-neutral-300 selection:bg-neutral-700">
      <div className="flex w-[600px] flex-col space-y-8 rounded-3xl bg-neutral-800 px-9 py-5">
        <div className="text-center text-3xl font-extrabold">To-do List:</div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <form
            className="flex items-center justify-center space-x-4"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              name="taskValue"
              id="task"
              placeholder="Add a new task"
              className="flex-1 rounded-2xl border-2 border-transparent bg-neutral-300 px-8 py-3 font-semibold tracking-[0.12rem] text-gray-800 selection:text-neutral-200 placeholder:text-gray-400 focus:border-2 focus:border-sky-600 focus:outline"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              autoComplete="off"
              required
            />
            <button className="cursor-pointer rounded-2xl bg-[#34d399] px-4 py-3 font-semibold text-neutral-900 selection:text-neutral-300 hover:bg-[#10b981] hover:shadow-[0px_0px_24px_-4px_#10b981]">
              Add Task
            </button>
          </form>
        </div>
        <div>
          <ul className="flex flex-col items-center justify-between space-y-6 text-xl font-semibold text-white">
            {tasks.map((curTask, index) => {
              return (
                <li
                  key={index}
                  className="flex w-full items-center justify-between rounded-2xl bg-neutral-500 px-6 py-3"
                >
                  {index}: {curTask}
                  <MdDeleteForever
                    className="cursor-pointer text-3xl text-red-400 hover:text-red-500"
                    onClick={() => handleDeleteButton(index)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <button
          className={`cursor-pointer rounded-2xl bg-[#f87171] px-4 py-3 font-semibold text-neutral-900 selection:text-neutral-300 hover:bg-[#ef4444] hover:shadow-[0px_0px_24px_-4px_#ef4444] ${tasks.length === 0 ? "hidden" : "block"}`}
          onClick={handleClearButton}
        >
          Clear Task
        </button>
      </div>
    </div>
  );
};
