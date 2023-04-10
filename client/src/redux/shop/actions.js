import axios from "axios"
import { CREATE_BRAND_FAILED, CREATE_BRAND_SUCCESS, DELETE_BRAND_FAILED, DELETE_BRAND_SUCCESS, GET_BRAND_FAILED, GET_BRAND_REQUEST, GET_BRAND_SUCCESS } from "./actionTypes";

// Brands actions
export const getAllBrands = () => async (dispatch) => {
    try {
        dispatch({type : GET_BRAND_REQUEST})
        await axios.get("http://127.0.0.1:5050/api/v1/product/brand").then((res) => {
            dispatch({type : GET_BRAND_SUCCESS, payload : res.data.brands})
        }).catch((error) => {
            dispatch({type : GET_BRAND_FAILED, payload : error.response.data.message})
        });
    } catch (error) {
        dispatch({type : GET_BRAND_FAILED, payload : error.response.data.message})
    }
}

export const createBrand = ({data, setModal, setInput, setLogo }) => async (dispatch) => {
    try {
        await axios.post("http://127.0.0.1:5050/api/v1/product/brand/create", data).then((res) => {
            dispatch({type : CREATE_BRAND_SUCCESS, payload : res.data.brand})
            setModal(false)
            setInput("")
            setLogo(null)
        }).catch((error) => {
            dispatch({type : CREATE_BRAND_FAILED, payload : error.response.data.message})
            console.log(error);
        });
    } catch (error) {
        console.log(error);
        dispatch({type : CREATE_BRAND_FAILED, payload : error.response.data.message})
    }
}
export const deleteBrand = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://127.0.0.1:5050/api/v1/product/brand/${id}`).then((res) => {
            dispatch({type : DELETE_BRAND_SUCCESS, payload : id})
        }).catch((error) => {
            dispatch({type : DELETE_BRAND_FAILED, payload : error.response.data.message})
            console.log(error);
        });
    } catch (error) {
        console.log(error);
        dispatch({type : DELETE_BRAND_FAILED, payload : error.response.data.message})
    }
}