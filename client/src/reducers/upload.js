//src/reducers/upload.js
import {UPLOAD_FAILED, UPLOAD_SUCCESS} from '../actions/upload'

export default function (state = {}, {type, payload}) {
	switch (type) {

        case UPLOAD_SUCCESS:
        return payload

		case UPLOAD_FAILED:
		return payload

		default:
      return state
	}
}