import React, { Component } from "react";
import "./footer.css";

import Button from "../Button/Button";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <nav className="footer_custom_styles">
          <Button link="#" classes="btn_social_media">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </Button>
          <Button link="#" classes="btn_social_media">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
          </Button>
        </nav>
      </>
    );
  }
}

export default Footer;
