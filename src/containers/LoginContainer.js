import React, {Component} from "react";
import {connect} from "react-redux";
import {logIn} from "../redux/actions/userActions";
import Login from "../components/Login/Login";
import {Redirect} from "react-router-dom";

class LoginContainer extends Component {
  onLogIn = (email, hashedPassword) => {
    if( !email || !hashedPassword){
      return;
    }
    this.props.logIn( email,hashedPassword);
  };
  render() {
    const { isLoggedIn } = this.props;
    return isLoggedIn ? (<Redirect to="/" />) : (<Login onLogIn={this.onLogIn}/>);
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.logInReducer.isLoggedIn
  };
};

const mapDispatchToProps = {
  logIn
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
