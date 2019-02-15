import React, { Component } from "react";
import "./Posts.css";
import PostCard from "../PostCard/PostCard";
import placeHolderImage from "../../assets/image-placeholder.svg";
import {API} from "../../constants/index";



class Posts extends Component {
  render(){
    return (
      <div className="Posts">
         { this.props.posts && this.props.posts.map((post, i) => (
        <PostCard
          key = {i}
          title={post.title}
          username={post.username}
          image = {post.media.path}
        />
      )) }
      </div>
    );
  }
}
export default Posts;
