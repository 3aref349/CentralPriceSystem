import {GET_POSTS} from '../actions/constants'

const postReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_POSTS:
        return payload
      default:
        return state
    }
}

export default postReducer;
