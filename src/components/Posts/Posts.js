import React, { Component } from "react";
import "./Posts.css";
import PostCard from "../PostCard/PostCard";
import placeHolderImage from "../../assets/image-placeholder.svg";

const posts = [
  {title: "First tile", description: "desc", image: placeHolderImage},
  {title: "Second tile", description: "desc1", image: placeHolderImage},
  {title: "Third tile", description: "desc2", image: placeHolderImage},
  {title: "Fourth tile", description: "desc3", image: placeHolderImage},
];

class Posts extends Component {
  render(){
    return (
      <div className="Posts">
      { posts.map((post, i) => (
        <PostCard
          key = {i}
          title={post.title}
          description={post.description}
          image = {post.image}
        />
      )) }
      </div>
    );
  }
}
export default Posts;
