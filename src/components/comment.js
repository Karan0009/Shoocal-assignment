import React, { Component } from "react";
import "./comment.css";

class Comment extends Component {
  state = {};

  render() {
    return (
      <div className="comment-box">
        <input
          type="text"
          className="comment-id"
          value={this.props.commentData.id}
          style={{ display: "none" }}
        />
        <div className="comment-box__left-side">
          <p className="comment-author">{this.props.commentData.author}</p>
          <p className="comment-body">{this.props.commentData.body}</p>
        </div>
        <div className="comment-box__right-side">
          <div className="comment-box__right-side__upvotes">
            <i
              class="fas fa-thumbs-up"
              onClick={(id) =>
                this.props.handleUpvote(this.props.commentData._id)
              }
            ></i>
            <p className="comment-upvotes">
              {this.props.commentData.upvotes} upvotes
            </p>
          </div>
          <div className="comment-box__right-side__downvotes">
            <i
              class="fas fa-thumbs-down"
              onClick={(id) =>
                this.props.handleDownvote(this.props.commentData._id)
              }
            ></i>
            <p className="comment-downvotes">
              {this.props.commentData.downvotes} downvotes
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
