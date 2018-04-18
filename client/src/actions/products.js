//src/actions/products
import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const FETCHED_ALL_PRODUCTS = 'FETCHED_ALL_PRODUCTS'

export const fetchAllProducts = () => (dispatch) => {
    request
        .get(`${baseUrl}/products`)
        .then(response => dispatch({
            type: FETCHED_ALL_PRODUCTS,
            payload: response.body.products
        }))
    .catch(err => alert(err))
}