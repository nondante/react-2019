import {combineReducers} from "redux";
import {registerReducer, logInReducer, getUsersReducer} from "./userReducers";
import {getPostsReducer} from "./postsReducers";

const rootReducer = combineReducers({
  registerReducer,
  logInReducer,
  getUsersReducer,
  getPostsReducer
});

export default rootReducer;
