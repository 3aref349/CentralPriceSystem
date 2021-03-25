import {GET_POSTS} from './constants';

export const getCustomers = () => dispatch => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({type: GET_POSTS, payload: posts}))
}


