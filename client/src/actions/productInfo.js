//src/actions/products
import * as request from 'superagent'
import {baseUrl} from '../constants'

export const FETCHED_PRODUCT_INFO = 'FETCHED_PRODUCT_INFO'

export const fetchProductInfo = (productId) => (dispatch) => {
    request
    .get(`${baseUrl}/products/${productId}`)
    .then(response => dispatch({
        type: FETCHED_PRODUCT_INFO,
        payload: response.body
    }))
    .catch(err => alert(err))
}