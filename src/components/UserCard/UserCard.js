import React, { Component } from "react";
//import placeHolderImage from "../../assets/image-placeholder.svg";
import { Media} from 'reactstrap';
import "./UserCard.css";

class UserCard extends Component {
  render(){
    const {image, email, username} = this.props;
    return (
      // <Card  className="UserCard mb-5 flex-row flex-wrap w-100">
      //   <CardImg className="UserCard__img rounded-circle w-10" top width="10%" src={image} alt="Card image cap" />
      //   <CardBody>
      //     <CardTitle className="UserCard__card-title">{title}</CardTitle>
      //     <CardText>{description}</CardText>
      //   </CardBody>
      // </Card>
      // <div className="media UserCard mb-5">
      //  <img className="media-left" width="400" alt="Image" src={image}>
      //  <div className="media-body">
      //     <h4 className="card-title">{title}</h4>
      //     <p className="card-text">{description}</p>
      //  </div>
      // </div>
      <Media className="UserCard mb-3 d-flex ">
          <Media className="UserCard__img media-left" width="50" object src={image} alt="Generic placeholder image" />
        <Media body className="text-left">
          <h6 className="card-title ml-2 d-block">{username}</h6>
          <p className="ml-2 d-block">{email}</p>
        </Media>
      </Media>
    )
  }
}

export default UserCard;
