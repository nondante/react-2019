import BootcampAPI from "../../helpers/BootcampAPI";
import {API, GET_POSTS_SUCCESS, GET_POSTS_ERROR, SUBMIT_POST_SUCCESS,SUBMIT_POST_ERROR} from "../../constants/index";
import CryptoJS from 'crypto-js';
/* ------ actions ---- */

const getPostsSuccess = (res) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: res.data.payload
  }
}
const getPostsError = () => {
  return {
    type: GET_POSTS_ERROR
  }
}

const submitPostsSuccess = (res) => {
  return {
    type: SUBMIT_POST_SUCCESS,
    payload: res.data.payload
  }
}
const submitPostsError = () => {
  return {
    type: SUBMIT_POST_ERROR
  }
}

/* ------ action creators ---- */


export const getPosts = () => {
  return dispatch => {
    return BootcampAPI.get(API.GET_POSTS)
    .then(res=> {
        console.log(res);
        dispatch(getPostsSuccess(res))
    })
    .catch((err) => {
      console.log(err);
      dispatch(getPostsError());
    });
  }
}

export const submitPost = (formData, caption) => {
  return dispatch => {
  return BootcampAPI.post(API.POST_IMAGE,formData)
    .then(res => {
      console.log(res);
      return BootcampAPI.post(API.POST_CAPTION, {
        caption,
        contentId: res.data.payload.contentId
     })
     .then(res=> dispatch(submitPostsSuccess(res)))
    })
    .catch((err)=> {
      console.error(err);
      dispatch(submitPostsError());
    });
  };
};