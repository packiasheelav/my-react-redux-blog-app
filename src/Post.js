import "./Style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Post extends Component {
  handleSelect = () => {
    console.log("inside select", this.props);
    this.props.history.push(`/Posts/${this.props.post.id}`, {
      some: this.props.post
    });
  };

  render() {
    return (
      <div
      className="allPosts"
        onClick={this.handleSelect}
        key={this.props.post.id}>
        <div  className='posts'>
          <h2 className="postHeader">{this.props.post.title}</h2>
          <p className="postCategory">{this.props.post.category}</p>
          
          </div>
      </div>
    );
  }
}

export default connect()(Post);
