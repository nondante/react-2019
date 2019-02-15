import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import dotenv from "dotenv";
import RegisterContainer from "./containers/RegisterContainer";
import LoginContainer from "./containers/LoginContainer";
import {createStore, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers";
import ProtectedRoute from "./components/ProtectedRoute/index";

dotenv.config();



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

class Root extends Component {
  render(){
    return(
      <Provider store = {store}>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute exact path="/" component={App}/>
            <Route exact path="/login" component={LoginContainer}/>
            <Route exact path="/register" component={RegisterContainer}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
