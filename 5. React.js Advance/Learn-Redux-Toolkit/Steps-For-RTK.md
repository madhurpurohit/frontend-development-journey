# Guide for How to Use Redux Toolkit.

## 1. Create/ Configure Store & Export it.

**Create a store.js file & use the below syntax.**

Note: configureStore will give us an object.

**Syntax:**

```
import {configureStore} from "@reduxjs/toolkit";
import reducerFnOfSlice1 from "./pathOfThatSlice";
import reducerFnOfSlice2 from "./pathOfThatSlice";
import reducerFnOfSlice3 from "./pathOfThatSlice";

const store = configureStore({
    reducer: {
    slice1Name: ReducerFn of  Slice1,
    slice2Name: ReducerFn of  Slice2,
    slice3Name: ReducerFn of  Slice3,
    }
})

export default store;

```

**Example:**

```
import {configureStore} from "@reduxjs/toolkit";
import cartReducer form "./PathOfThatSlice";

const store = configureStore({
    reducer : {
        cart: cartReducer,
    }
})

```

---

## 2. Create Slices & Export Slice/ReducersFn it.

**Create a sliceName.js file for example Slice1.js, CartSlice.js etc.**

**Syntax:**

```
import {createSlice} from "@reduxjs/toolkit";

const taskReducer = createSlice({
    name: "", // Here we wrote the name of this particular slice.
    initialState: {}, // Here we wrote all the state variable that we want like count:0, theme:dark etc.
    reducers: { // In this we will create all the function which we want to use.
    Function1Name: CallbackFatArrowFunction.
    Function2Name: CallbackFatArrowFunction.
    }
})

export {Function1Name, Function2Name} = taskReducer.actions;

export default taskReducer.reducer; // It will use in store as an ReducerFunction of this slice.
```

**Example:**

```
import {createSlice} from "@reduxjs/toolkit";

const taskReducer=createSlice({
    name: cart,
    initialState: {count: 0},
    reducers:{
        Increment: (state) => {
            state.count+=1;
        }
        Decrement: (state, action) => {
            state.count-=action.payload;
        }
    }
})

export const {Increment, Decrement} = taskReducer.actions;

export default taskReducer.reducer;
```

---

## 3. Provide the Store access to all the component.

**Go to main.jsx file & write the below code.**

**Syntax:**

```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./storePath";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> // This will give store access to all the components.
      <App />
    </Provider>
  </StrictMode>,
);

```

---

## 4. Use the state from store?

For accessing we use useSelector() Hook which will give use all the state from global store. It will take a callback function.

**Syntax Of useSelector():**

```
import {useSelector} from "react-redux";

const state1Name = useSelector((state) => state.sliceName.stateFromThatSlice)
```

**Example:**

```
import {useSelector} from "react-redux";


const count = useSelector((state)=>state.cart.count);
```

---

## 5. How state looks & why we don't use state.stateName directly?

Actually state is looks like:

**Syntax:**

```
const state = {
    slice1Name : {
        state : value,
    }
    slice2Name : {
        state1 : value,
    }
    slice3Name : {
        state : value,
    }
}
```

**Example:**

```
const state = {
    cart : {
        count : 0,
    }
    task : {
        task : [],
    }
    cartItems : {
        count : 3,
    }
}
```

---

## 6. Call the reducers Fn using dispatch.

**For call the reducers Fn we have firstly dispatch that function.**

**Syntax:**

```
import {useDispatch} form "react-redux";
import {Function1Name, Function2Name} from "./PathOfThatSlice";


const dispatch = useDispatch();

<button onClick={()=>dispatch(Function1Name())} >Text</button>
<button onClick={()=>dispatch(Function1Name(argument))} >Text</button>
```

**Example:**

```
import {useDispatch} form "react-redux";
import {Increment, Decrement} from "./PathOfThatSlice";

const dispatch = useDispatch();

function handleDecrementButton(){
    dispatch(Decrement(1));
}

<button onClick={()=>dispatch(Increment())} >Increment</button>
<button onClick={handleDecrementButton} >Decrement</button>
```

---

## 7. How to handle API using RTK createAsyncThunk?

It will give use some data.

API:- https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20 (This will use for Bitcoin Currency Data.)

**Syntax:**

**Step1:- Firstly we create a file for slice inside which we write the below code.**

```
import {createAsyncThunk} from "@reduxjs/toolkit";

const FetchData = createAsyncThunk({
    //Step1:- Firstly create action which is an object like {type: "", payload: ""}.

    'SlicerName/FnName', // It the type key inside action.

    //Step2:- Create a async await function.

    async (args, thunkAPI) => {
        try{
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data = await res.json();
            return data; // It will goes inside payload.
        } catch(error) {
            return rejectWithValue("msg"); // Inside this we can send any error message or we can send (error.message); also.
        }
    }
})
// When we call this function & pass any arguments than it will automatically goes to args.
// & every single return data will go into payload.

//** For the above createAsyncThunk() here we use action type to determine it. & For this we have to create a slice. This will be done in the same file where createAsyncThunk is present.

const slicer1 = createAsyncThunk({
    name: 'slice1',
    initialState: {data:[], loading:false, error:null},
    reducer: {}, // Here we empty this we don't write here. This will use for synchronous operations.
    extraReducers: (builder) => { // It will take an callback function with builder parameter. This will use for asynchronous operations.
        builder
        .addCase(FetchData.pending, (state)=>{
            state.loading = true;
            state.error =null;
        }) // This will complete the pending request. {type: "SlicerName/FnName/pending}
        .addCase(FetchData.fulfilled, (state, action)=>{
            state.data = action.payload;
            state.loading = false;
        }) // This will complete the fulfilled request. {type: "SlicerName/FnName/fulfilled}
        .addCase(FetchData.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        }) // This will complete the rejected request. {type: "SlicerName/FnName/rejected}
    },
})

export default slicer1.reducer;
export FetchData;
```

**Step2:- Than we create a store file where we configure store, in this store we write the sliceReducer name which we export using slicer1.reducer in above file, & inside reducer:{ sliceName: sliceReducer } here sliceName is slice1.**

**Step3:- Than we provide this store using `<Provider store={store}></Provider>`**

**Step4:- For fetch the data or call that FetchData function, we go to a file where we use this data. & write the below code.**

```
import {useDispatch, useSelector} from "react-redux`;
import {FetchData} from "./Path";

export default FunctionName(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(FetchData(20)); // Here FetchData(20) is a function not an action.
    },[]);

    // To access the data which is present inside slice.
    const {data, loading, error} = useSelector((state)=>state.slice1); // Here Slice1 is sliceName. & we want all the data not any particular once, that's why we don't write state.slice1.data like this.
}
```

createAsyncThunk will automatically create all the dispatch function. For all the state like pending, fulfilled, reject.

1. **How he create pending dispatch function**
   `{type : "SlicerName/FnName/pending", payload : undefined }`\

2. **If data is arrived than how it will dispatch function for fulfilled status.**
   `{type : "SlicerName/FnName/fulfilled", payload : data }`

3. **If error has occurred than how it will dispatch function for rejected status.**
   `{type : "SlicerName/FnName/rejected", payload : "msg/error.message" }`

**Who will do this dispatch work automatically**
This all done by thunkAPI which is used in async await function. When we call this function FetchData than thunkAPI will firstly call the pending dispatch function, when data is arrived than it will call the fulfilled dispatch function, & when error is occurred than it will call the rejected dispatch function. These all are work automatically we don't need to write it manually.

---
