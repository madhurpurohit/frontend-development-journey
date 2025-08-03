/* eslint-disable no-case-declarations */
import { configureStore } from "@reduxjs/toolkit";

//* Step1: Create a Reducer Function.
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = "task/fetch";

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

    case FETCH_TASK:
      return { ...state, task: [...state.task, ...action.payload] };

    default:
      return state;
  }
};

//* Step2: Create the Redux store using reducer.
export const store = configureStore({
  reducer: {
    taskReducer, // If the key & value both have same than we can write only one like taskReducer:taskReducer,
  },
});

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

export const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};

//? How to use this.
store.dispatch(addTask("Learn React Redux"));
// console.log("Updated State:", store.getState());

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

store.dispatch(deleteTask(1));
// console.log("Deleted Task", store.getState());

//* For Redux Thunk.
export const fetchData = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=3"
      );
      const data = await res.json();
      // console.log(data);

      dispatch({
        type: FETCH_TASK,
        payload: data.map((curElem) => curElem.title),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
