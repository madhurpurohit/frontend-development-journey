import { configureStore, createSlice } from "@reduxjs/toolkit";

//* Step1: Create a Slice.
const taskReducer = createSlice({
  name: "task",
  initialState: { task: [] },
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload);
    },
    deleteTask(state, action) {
      state.task = state.task.filter(
        (curTask, index) => index !== action.payload,
      );
    },
    clearTask(state) {
      state.task = [];
    },
  },
});

export const { addTask, deleteTask, clearTask } = taskReducer.actions;

//* Step2: Create the Redux store using reducer.
export const store = configureStore({
  reducer: {
    taskReducer: taskReducer.reducer, // If the key & value both have same than we can write only one like taskReducer:taskReducer,
  },
});

//* Step3: Log into the initial state.
// console.log(store.getState());

//* Step4: Dispatch the action
store.dispatch(addTask("Buy Mango"));
store.dispatch(addTask("Buy Apple"));
store.dispatch(addTask("Buy Orange"));
store.dispatch(addTask("Buy Papaya"));

//* For Redux Thunk.
// export const fetchData = () => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(
//         "https://jsonplaceholder.typicode.com/posts?_limit=3",
//       );
//       const data = await res.json();
//       // console.log(data);

//       dispatch({
//         type: FETCH_TASK,
//         payload: data.map((curElem) => curElem.title),
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
