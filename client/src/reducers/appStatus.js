import {UPLOAD_FAILED, UPLOAD_SUCCESS} from '../actions/upload'

export default function (state = "uploading", {type, payload}) {
	switch (type) {

		case UPLOAD_FAILED:
			return state = "failed"
        
        case UPLOAD_SUCCESS:
            return state = "uploadSuccess"
     
		default:
      return state
	}
}