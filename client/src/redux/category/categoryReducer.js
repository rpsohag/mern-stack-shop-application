import { CREATE_CATEGORY_FAILED, CREATE_CATEGORY_SUCCESS, GET_CATEGORY_FAILED, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS } from "./actionTypes";
import { initialState } from "./initialState";


const categoryReducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case GET_CATEGORY_REQUEST:
        return {
            ...state,
            loading: true
        };
    case GET_CATEGORY_SUCCESS: 
    return {
        ...state,
        loading : false,
        categories : payload
    };
    case GET_CATEGORY_FAILED: 
    return {
        ...state,
        loading : false,
        categories : [],
        error : payload
    }
    case CREATE_CATEGORY_SUCCESS: 
    return {
        ...state,
        categories : [...state.categories, payload]
    }
    case CREATE_CATEGORY_FAILED: 
    return {
        ...state,
        categories: [],
        error : payload
    }
  
    default:
        return state;
  }
}

export default categoryReducer