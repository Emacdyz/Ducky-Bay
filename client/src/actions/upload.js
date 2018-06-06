// src/actions/upload.js
import * as request from 'superagent'
import {baseUrl} from '../constants'

export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS'
export const UPLOAD_FAILED = 'UPLOAD_FAILED'

export const upload = (picture, title, description, price) => (dispatch) => {
    
    request
      .post(`${baseUrl}/products`)
      .attach('file', picture)
      .field('title', title)
      .field('description', description)
      .field('price', price)
      .then(res => {
          console.log(res)
        dispatch({
          type: UPLOAD_SUCCESS,
          payload: res.body
        })
      })
      .catch(err => {
        dispatch({
          type: UPLOAD_FAILED,
          payload: 'Upload Failed'
        })
      })
}
  
