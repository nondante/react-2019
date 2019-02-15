import React, { Component } from "react";
import "./UserList.css";
import UserCard from "../UserCard/UserCard";
import placeHolderImage from "../../assets/image-placeholder.svg";

const users = [
  {title: "First user", description: "desc", image: placeHolderImage},
  {title: "Second user", description: "desc1", image: placeHolderImage},
  {title: "Third user", description: "desc2", image: placeHolderImage},
  {title: "Fourth user", description: "desc3", image: placeHolderImage},
];

class UserList extends Component {
  render(){
    return (
      <div className="UserList">
      { this.props.users && this.props.users.map((user, i) => (
        <UserCard
          key = {`userCard${i}`}
          username={user.username}
          email={user.email}
         image = {placeHolderImage}
        />
      )) }
      </div>
    );
  }
}
export default UserList;
