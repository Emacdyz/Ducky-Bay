//src/actions/products
import * as request from 'superagent'
import {baseUrl} from '../constants'

export const FETCHED_ALL_PRODUCTS = 'FETCHED_ALL_PRODUCTS'
export const ADD_NEW_AD = 'ADD_NEW_AD'

export const fetchAllProducts = () => (dispatch) => {
    request
    .get(`${baseUrl}/products`)
    .then(result => dispatch({
        type: FETCHED_ALL_PRODUCTS,
        payload: result.body
    }))
    .catch(err => console.error(err))
}

export const createAd = (product) => (dispatch) => {
    request
      .post(`${baseUrl}/products`)
      .send(product)
      .then(response => alert(JSON.stringify(response.body)))
}