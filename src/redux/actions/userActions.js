import BootcampAPI from "../../helpers/BootcampAPI";
import {API, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, GET_USERS_SUCCESS, GET_USERS_ERROR} from "../../constants/index";
import CryptoJS from 'crypto-js';
/* ------ actions ---- */

const getUsersSuccess = (res) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: res.data.payload
  }
}
const getUsersError = () => {
  return {
    type: GET_USERS_ERROR
  }
}
const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
    isRegistered: true
  }
}

const registerError = () => {
  return {
    type: REGISTER_ERROR,
    isRegistered: false
  };
};


const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
    isLoggedIn: true
  }
}

const loginError = () => {
  return {
    type: LOGIN_ERROR,
    isLoggedIn: false
  };
};

/* ------ action creators ---- */

export const register = (username, email, password) => {
  return dispatch => {
  return BootcampAPI.post(API.REGISTER, {
      username: username,
      email: email,
      hashedPassword: CryptoJS.SHA256(password).toString()
    })
    .then(() => dispatch(registerSuccess()))
    .catch(()=> dispatch(registerError()));
  };
};

export const logIn = (email, hashedPassword) => {
  return dispatch => {
  return BootcampAPI.post(API.LOGIN, {
      email: email,
      hashedPassword: CryptoJS.SHA256(hashedPassword).toString()
    })
    .then((res) => {
      const token = res.data.payload.token;
      localStorage.setItem("jwtToken",token);
      dispatch(loginSuccess());
    })
    .catch(()=> dispatch(loginError()));
  };
};

export const getUsers = () => {
  return dispatch => {
    return BootcampAPI.get(API.GET_USERS)
    .then(res=> dispatch(getUsersSuccess(res)))
    .catch((err) => {
      console.log(err);
      dispatch(getUsersError());
    });
  }
}