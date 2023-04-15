import React from 'react'
import { GET_TAG_FAILED, GET_TAG_REQUEST, GET_TAG_SUCCESS, TAG_CREATE_SUCCESS } from './actionTypes';
import { initialState } from './initialState'

const tagReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case GET_TAG_REQUEST:
            return {
                ...state,
                loading : true
            }
        case GET_TAG_SUCCESS:
            return {
                ...state,
                loading : false,
                tags : payload
            }
        case GET_TAG_FAILED: {
            return {
                ...state,
                locading: false,
                tags : [],
                error : payload
            }
        }
        case TAG_CREATE_SUCCESS: 
            return {
                ...state,
                tags: [...state.tags, payload]
            }
        default:
            return state;
    }
}

export default tagReducer