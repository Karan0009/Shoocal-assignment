import React, { Component, Fragment } from "react";
import "./comments.css";

import Comment from "./comment";

class Comments extends Component {
  state = {};
  render() {
    return (
      <div className="comments-box">
        {this.props.comments.map((comment) => (
          <Comment
            key={comment._id}
            handleUpvote={this.props.handleUpvote}
            handleDownvote={this.props.handleDownvote}
            commentData={comment}
          />
        ))}
      </div>
    );
  }
}

export default Comments;
