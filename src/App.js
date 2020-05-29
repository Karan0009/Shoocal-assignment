import React, { Component } from "react";
import "./App.css";

import CommentBox from "./components/comments";

class App extends Component {
  state = {
    user: { _id: 1, username: "default user" },
    commentValue: "",
    comments: [
      {
        _id: "1",
        author: "some user",
        body: "this is the body of the comment",
        upvotes: 0,
        upvoters: [],
        downvoters: [],
        downvotes: 0,
      },
    ],
  };

  handleCommentInput = (e) => {
    const value = e.target.value;
    this.setState({ commentValue: value });
  };

  postComment = (e) => {
    e.preventDefault();
    const comments = this.state.comments;
    const author = this.state.user;
    const commentValue = this.state.commentValue;
    if (commentValue !== "") {
      const comment = {
        _id: Math.floor(Math.random() * 1000),
        author: author.username,
        body: commentValue,
        upvotes: 0,
        upvoters: [],
        downvoters: [],
        downvotes: 0,
      };
      comments.push(comment);
      console.log(comment);
      this.setState({ commentValue: "", comments });
    } else {
      console.log("comment box is empty");
    }
  };

  canUpvote = (user, comment) => {
    if (comment) {
      const index = comment.upvoters.findIndex(
        (upvoter) => upvoter._id === user._id
      );
      if (index > -1) {
        return false;
      } else return true;
    }
  };

  canDownvote = (user, comment) => {
    if (comment) {
      const index = comment.downvoters.findIndex(
        (downvoter) => downvoter._id === user._id
      );
      if (index > -1) {
        return false;
      } else return true;
    }
  };

  handleUpvote = (id) => {
    const comments = this.state.comments;
    const user = this.state.user;
    const comment = comments.find((comment) => comment._id === id);
    if (comment) {
      if (this.canUpvote(user, comment)) {
        comment.upvotes += 1;
        comment.upvoters.push(user);
      } else {
        comment.upvotes -= 1;
        const upvoters = comment.upvoters.filter(
          (upvoter) => upvoter._id !== user._id
        );
        comment.upvoters = upvoters;
      }

      this.setState({ comments });

      console.log("upvoted", id);
    }
  };

  handleDownvote = (id) => {
    const comments = this.state.comments;
    const user = this.state.user;
    const comment = comments.find((comment) => comment._id === id);
    if (comment) {
      if (this.canDownvote(user, comment)) {
        comment.downvotes += 1;
        comment.downvoters.push(user);
      } else {
        comment.downvotes -= 1;
        const downvoters = comment.downvoters.filter(
          (downvoter) => downvoter._id !== user._id
        );
        comment.downvoters = downvoters;
      }

      this.setState({ comments });
      console.log("downvoted", id);
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <form onSubmit={(e) => this.postComment(e)}>
            <textarea
              onChange={(e) => this.handleCommentInput(e)}
              rows="3"
              placeholder="Type a Comment"
              className="comment-textarea"
              value={this.state.commentValue}
            ></textarea>
            <br />
            <button className="btn btn-post-comment" type="submit">
              Post Comment
            </button>
          </form>
          <CommentBox
            postComment={this.postComment}
            handleUpvote={this.handleUpvote}
            handleDownvote={this.handleDownvote}
            comments={this.state.comments}
          />
        </div>
      </div>
    );
  }
}

export default App;
