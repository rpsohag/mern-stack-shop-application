import { combineReducers } from "redux";
import brandReducer from "./brand/brandReducer";
import categoryReducer from "./category/categoryReducer";
import tagReducer from "./tag/tagReducer";

// create root reducer
const rootReducer = combineReducers({
    brand : brandReducer,
    category : categoryReducer,
    tag : tagReducer
});


export default rootReducer;