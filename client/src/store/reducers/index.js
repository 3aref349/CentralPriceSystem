import {combineReducers} from 'redux';
import postReducer from './customer';

export default combineReducers({
  posts: postReducer
})
