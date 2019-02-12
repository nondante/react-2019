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
  constructor(){
    super();
    this.state = {
      isOpen:false,
    };
  }
  onOpenModal = () => {
    this.setState({isOpen: true});
  }
  onCloseModal = () => {
    this.setState({isOpen: false});
  }
  render(){
    //const {title, description, image} = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar fixed="true" color="light" light expand="md" className="mb-5 navbar fixed-top">
        <div className="container-fluid">
          <NavbarBrand>
          <img src={placeHolderImage} width="30" height="30" className="d-inline-block align-top mr-3 rounded-circle" alt=""/>
          Bootcamp App
          </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                 <Button onClick={this.onOpenModal} color="primary">create post</Button>{' '}
                {
                  isOpen && <PostModal onClose={this.onCloseModal} />
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
