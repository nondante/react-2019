import React, { Component } from "react";
import placeHolderImage from "../../assets/image-placeholder.svg";
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button,
  NavItem} from 'reactstrap';
import "./Header.css";
import PostModal from "../PostModal/PostModal";

class Header extends Component {
  render(){
    //const {title, description, image} = this.props;
    const { isOpen, toggleModal, onInputChange, onImageUpload, onPostSubmit } = this.props;
    return (
      <div>
        <Navbar fixed="true" color="light" light expand="md" className="mb-5 navbar ">
        <div className="container-fluid">
          <NavbarBrand>
          <img src={placeHolderImage} width="30" height="30" className="d-inline-block align-top mr-3 rounded-circle" alt=""/>
          Bootcamp App
          </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                 <Button onClick={toggleModal} color="primary">create post</Button>{' '}
                {
                  isOpen && <PostModal onImageUpload={onImageUpload} onInputChange={onInputChange} onClose={this.onCloseModal} onPostSubmit={onPostSubmit} />
                }
                </NavItem>
            </Nav>
            </div>
        </Navbar>
      </div>

    );
  }
}

export default Header;
