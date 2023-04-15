import axios from "axios"
import { toast } from "react-hot-toast"
import { CREATE_CATEGORY_SUCCESS, GET_CATEGORY_FAILED, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, CREATE_CATEGORY_FAILED } from "./actionTypes"


export const getAllCategories = () => async (dispatch) => {
    try {
        dispatch({type : GET_CATEGORY_REQUEST})
        await axios.get("http://127.0.0.1:5050/api/v1/product/category").then(res => {
            dispatch({ type : GET_CATEGORY_SUCCESS, payload : res.data.categories})
        }).catch(error => {
            dispatch({ type : GET_CATEGORY_FAILED, payload : error.response.data.message})
        })
    } catch (error) {
        dispatch({type : GET_CATEGORY_FAILED, payload : error.response.data.message})
    }
}

export const createCategory = ({data, setInput, setPhoto}) => async (dispatch) => {
    console.log(data)
    try {
        await axios.post("http://127.0.0.1:5050/api/v1/product/category/create", data).then((res) => {
            dispatch({type : CREATE_CATEGORY_SUCCESS, payload : res.data.category})
            setInput('')
            setPhoto(null)
            toast.success("Category Created Successfully!")
        }).catch((error) => {
            dispatch({type : CREATE_CATEGORY_FAILED, payload : error.response.data.message})
            console.log('not ok')
        })
    } catch (error) {
        dispatch({type : CREATE_CATEGORY_FAILED, payload : error.response.data.message})
        console.log("error")
    }
}