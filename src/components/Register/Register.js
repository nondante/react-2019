import React , {Component} from "react";
import {Button} from "reactstrap";
import "./Register.css";
import {Link} from "react-router-dom";

class Register extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }
  onInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    const  {username, email, password} = this.state;
    const {onRegister} = this.props;
    return (
      <div className="Register">
        <div className="Register__content">
          <h2>Register</h2>
          <form>
            <div className="form-group">
              <label>username</label>
              <input onChange = {this.onInputChange} name="username" className="form-control" type="text" value={username} />
            </div>
            <div className="form-group">
              <label>email</label>
              <input onChange = {this.onInputChange} name="email" className="form-control" type="email" value={email}/>
            </div>
            <div className="form-group">
              <label>password</label>
              <input onChange = {this.onInputChange} name="password" className="form-control" type="password" value={password} />
            </div>
            <Button onClick={()=>onRegister(username,email,password)} color="dark">Register</Button>
          </form>
          <div className="Register__content__link">
          <Link to="/login">already registered? login</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Register;
