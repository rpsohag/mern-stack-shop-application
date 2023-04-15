import axios from "axios"
import { toast } from "react-hot-toast"
import { GET_TAG_FAILED, GET_TAG_REQUEST, GET_TAG_SUCCESS, TAG_CREATE_FAILED, TAG_CREATE_SUCCESS } from "./actionTypes"


export const getAllTags = () => async (dispatch) => {
    try {
        dispatch({type : GET_TAG_REQUEST})
        await axios.get("http://127.0.0.1:5050/api/v1/product/tag").then((res) => {
            dispatch({type : GET_TAG_SUCCESS, payload : res.data.tags});
        }).catch((error) => {
            dispatch({type : GET_TAG_FAILED, payload : error.response.data.message})
        })
    } catch (error) {
        dispatch({type : GET_TAG_FAILED, payload : error.response.data.message})
    }
}

export const createTag = ({data, setInput}) => async (dispatch) => {
    try {
        await axios.post("http://127.0.0.1:5050/api/v1/product/tag/create", data).then((res) => {
            dispatch({type : TAG_CREATE_SUCCESS, payload : res.data.tags})
            setInput("")
            toast.success("Tag Created Successfully!")
        }).catch((error) => {
            dispatch({type : TAG_CREATE_FAILED, payload : error.response.data.message})
        })
    } catch (error) {
        dispatch({type : TAG_CREATE_FAILED, payload : error.response.data.message})
    }
}