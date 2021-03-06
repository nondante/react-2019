import {REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, GET_USERS_SUCCESS, GET_USERS_ERROR} from "../../constants";

const defaultState = {
  isRegistered: false,
  isLoggedIn: false,
  users: null
}

export const registerReducer = (state =defaultState, action) => {
  switch(action.type){
    case REGISTER_SUCCESS:
      return {...state, isRegistered: true};
    case REGISTER_ERROR:
      return {...state, isRegistered: false};
    default:
      return state;
  }
};

export const logInReducer = (state =defaultState, action) => {
  switch(action.type){
    case LOGIN_SUCCESS:
      return {...state, isLoggedIn: true};
    case LOGIN_ERROR:
      return {...state, isLoggedIn: false};
    default:
      return state;
  }
};

export const getUsersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {...state,users: action.payload};
    case GET_USERS_ERROR:
      return {...state, users: null};
    default:
      return state
  }
}