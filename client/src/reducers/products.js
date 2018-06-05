// src/reducers/products.js
import {FETCHED_ALL_PRODUCTS, ADD_NEW_AD} from '../actions/products'

export default function (state = [], {type, payload}) {
    switch (type) {
        case FETCHED_ALL_PRODUCTS:
            return payload
        
        // case ADD_NEW_AD:
        //     return [...state, action.payload]
    
    default:
        return state
    }
}