/* eslint-disable no-case-declarations */
import { createStore } from "redux";

//* Step1: Create a Reducer Function.
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, task: [...state.task, action.payload] };

    case DELETE_TASK:
      const updatedTask = state.task.filter((curTask, index) => {
        return index !== action.payload;
      });
      return { ...state, task: updatedTask };

    default:
      return state;
  }
};

//* Step2: Create the Redux store using reducer.

export const store = createStore(taskReducer);
// console.log(store);

//* Step3: Log the initial State.

// console.log("Initial State:", store.getState());

//* Step4: Dispatch an action to add a task.
store.dispatch({ type: ADD_TASK, payload: "Learn with us" });
store.dispatch({ type: ADD_TASK, payload: "HTML Completed" });
store.dispatch({ type: ADD_TASK, payload: "CSS Completed" });
store.dispatch({ type: ADD_TASK, payload: "Tailwind CSS Completed" });
store.dispatch({ type: ADD_TASK, payload: "JavaScript Completed" });
// console.log("Updated State:", store.getState());

store.dispatch({ type: ADD_TASK, payload: "React Completed" });
// console.log("Updated State:", store.getState());

//? Dispatch an action to delete a task.
store.dispatch({ type: DELETE_TASK, payload: 1 });
// console.log("Deleted Task", store.getState());

//* Step6: Create Action Creators.

const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};

//? How to use this.
store.dispatch(addTask("Learn React Redux"));
// console.log("Updated State:", store.getState());

const deleteTask = (data) => {
  return { type: DELETE_TASK, payload: data };
};

store.dispatch(deleteTask(1));
// console.log("Deleted Task", store.getState());
