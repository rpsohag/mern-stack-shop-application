import { BRAND_STATUS_SUCCESS, BRAND_UPDATE_SUCCESS, CREATE_BRAND_SUCCESS, DELETE_BRAND_SUCCESS, GET_BRAND_FAILED, GET_BRAND_REQUEST, GET_BRAND_SUCCESS } from "./actionTypes.js";
import { initialState } from "./initState.js";


const shopReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_BRAND_REQUEST:
            return {
                ...state,
                locading : true
            };
        case GET_BRAND_SUCCESS:
            return {
                ...state,
                locading : false,
                brands : payload
            };
        case GET_BRAND_FAILED:
            return {
                ...state,
                locading : false,
                brands: [],
                error: payload
            };
        case CREATE_BRAND_SUCCESS:
            return {
                ...state,
                brands: [...state.brands, payload],
            };
        case DELETE_BRAND_SUCCESS:
            return {
                ...state,
                brands: state.brands.filter((data) => data._id !== payload),
            };
        case BRAND_STATUS_SUCCESS:
            state.brands[state.brands.findIndex((data) => data._id === payload._id)] = payload ;
            return {
                ...state,
                brands: state.brands,
            };
        case BRAND_UPDATE_SUCCESS:
            state.brands[state.brands.findIndex((data) => data._id === payload._id)] = payload ;
            return {
                ...state,
                brands: state.brands,
            };
    
        default:
            return state;
    }
}

export default shopReducer;