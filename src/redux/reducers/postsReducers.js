import {API, GET_POSTS_SUCCESS, GET_POSTS_ERROR, SUBMIT_POST_SUCCESS,SUBMIT_POST_ERROR} from "../../constants/index";

const defaultState = {
  posts: null,
  image: null
}


export const getPostsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {...state,posts: action.payload.reverse()};
    case GET_POSTS_ERROR:
      return {...state, posts: null};
    case SUBMIT_POST_SUCCESS:
      return {...state,posts: [action.payload,...state.posts]};
    case SUBMIT_POST_ERROR:
    default:
      return state
  }
}