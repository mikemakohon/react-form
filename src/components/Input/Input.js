import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    const { name, type, value, placeholder, onChange, error, title, required } =
      this.props;

    return (
      <input
        required={required}
        htmlFor={title}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}

export default Input;
