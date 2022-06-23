import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    const { name, type, value, placeholder, onChange, error, title, required } =
      this.props;

    return (
      <div>
        <label>
          <input
            required={required}
            htmlFor={title}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        </label>
        {error && <p className="error">{error}</p>}
      </div>
    );
  }
}

export default Input;
