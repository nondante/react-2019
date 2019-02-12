import React, { Component } from "react";
import PostModal from "../PostModal/PostModal";
import placeHolderImage from "../../assets/image-placeholder.svg";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem} from 'reactstrap';
import "./Header.css";

class Header extends Component {
  render(){
    //const {title, description, image} = this.props;
    return (
      <div>
        <Navbar color="light" light expand="md" className="mb-3">
          <NavbarBrand>
          <img src={placeHolderImage} width="30" height="30" className="d-inline-block align-top mr-3 rounded-circle" alt=""/>
          Bootcamp App
          </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <button class="btn btn-primary" type="submit">create posts</button>
              </NavItem>
            </Nav>
        </Navbar>
      </div>

    );
  }
}

export default Header;
