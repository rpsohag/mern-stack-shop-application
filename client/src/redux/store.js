import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// redux middlewares
const middlewares = [thunk];

// create app store
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewares)));


// export store
export default store;