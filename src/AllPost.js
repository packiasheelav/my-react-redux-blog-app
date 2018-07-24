import Post from "./Post";
import React, { Component } from "react";
import { connect } from "react-redux";

class AllPost extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.posts };
  }

  render() {
    console.log(this.props);
    return (
      <div className="postsforStyling">
        <h1 className="post_heading">All Posts</h1>
        {this.props.posts.map(post => <Post post={post} key={post.id} />)}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state
  };
};

export default connect(
  mapStateToProps,
  null
)(AllPost);
