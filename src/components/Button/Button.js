import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const { title, onClick, type } = this.props;

    return (
      <button type={type} onClick={onClick}>
        {title}
      </button>
    );
  }
}

export default Button;
