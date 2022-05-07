import { legacy_createStore as createStore } from "redux";

const reducer = (store, action) => {
     if (action.type === "ADD_COUNT"){
          return { ...store, counter: store.counter + action.payload};
     }
     return store ;
};

const initialstore = {
     counter: 0,
     todos: [],
     theme:"dark",
};

const store = createStore(reducer,initialstore);
console.log("Initial-store", store.getState());