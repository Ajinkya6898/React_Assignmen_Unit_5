import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./reducer";
import { Thunk } from "redux-thunk";

export const store = createStore(
     counterReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     )

// store.subscribe(() => {
//      console.log("Subscribe:", store.getState());
// });

// const middleware1 =(store) => (next) => (action) => {
//      console.log("Entering MW1");
//      next(action);
//      console.log("Entering MW1");
// };


export const Store = createStore(
     rootReducer,
     applyMiddleware(Thunk)
);