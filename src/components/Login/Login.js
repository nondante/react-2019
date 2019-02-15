import React , {Component} from "react";
import {Button} from "reactstrap";
import "./Login.css";
import {Link} from "react-router-dom";

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      hashedPassword: ""
    }
  }
  onEmailChange = (e) => {
    this.setState({email: e.target.value});
  }
  onPasswordChange = (e) => {
    this.setState({hashedPassword: e.target.value});
  }
  onInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  render(){
    const  {email, hashedPassword} = this.state;
    const {onLogIn} = this.props;
    return (
      <div className="Login">
        <div className="Login__content">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label>email</label>
              <input onChange = {this.onInputChange} name="email" className="form-control" type="email" value={email} />
            </div>
            <div className="form-group">
              <label>password</label>
              <input onChange = {this.onInputChange} name="hashedPassword" className="form-control" type="password" value={hashedPassword}/>
            </div>
            <Button onClick={()=>onLogIn(email,hashedPassword)} color="dark">Login</Button>
          </form>
          <div className="Login__content__link">
          <Link to="/register">register</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Login;
