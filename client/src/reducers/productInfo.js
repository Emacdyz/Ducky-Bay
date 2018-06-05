//src/reducers/productInfo.js
import {FETCHED_PRODUCT_INFO} from '../actions/productInfo'

export default function (state = [], {type, payload}) {
    switch (type) {
        case FETCHED_PRODUCT_INFO:
            return payload
    
    default:
        return state
    }
}