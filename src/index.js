import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";

class Root extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
