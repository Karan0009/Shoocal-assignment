import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";

import "./nav.css";
const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "#ccfff6")};
  color: ${(props) => (props.primary ? "#ccfff6" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 1em;
  border: 2px solid palevioletred;
  border-radius: 5px;
`;

class Nav extends Component {
  state = {
    showButtons: true,
  };

  componentDidMount() {
    this.setState({
      showButtons: this.props.location.pathname !== "/settings",
    });
  }

  render() {
    return (
      <>
        <nav className="nav_custom_styles">
          <Button link="/" classes="logo">
            {this.props.appName}
          </Button>
          {this.state.showButtons && (
            <Button
              classes="nav_btn btn_add"
              primary
              onClick={this.props.showForm}
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
            </Button>
          )}
          {this.state.showButtons && (
            <Button classes="nav_btn btn_settings" primary>
              <i className="fa fa-cog" aria-hidden="true"></i>
            </Button>
          )}
        </nav>
      </>
    );
  }
}

export default Nav;
