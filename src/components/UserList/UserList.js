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
      { users.map((user, i) => (
        <UserCard
          key = {i}
          title={user.title}
          description={user.description}
          image = {user.image}
        />
      )) }
      </div>
    );
  }
}
export default UserList;
