import React , {Component} from "react";
import {Button} from "reactstrap";
import "./Register.css";

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
    console.log([e.target.name]);
  }

  render(){
    const  {username, email, password} = this.state;
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
              <label> password </label>
              <input onChange = {this.onInputChange} name="password" className="form-control" type="password" value={password} />
            </div>
            <Button color="dark">Login</Button>
          </form>
        </div>
      </div>
    )
  }
}
export default Register;
