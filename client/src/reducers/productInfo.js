//src/reducers/productInfo.js
import {FETCHED_PRODUCT_INFO} from '../actions/productInfo'

export default function (state = [], action) {
    switch (action.type) {
        case FETCHED_PRODUCT_INFO:
            return action.payload
    
    default:
        return state
    }
}