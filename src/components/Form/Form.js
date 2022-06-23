import React, { Component } from "react";
import Input from "./Input";
import Button from "../Button";
import "./Form.css";
import data from "../../data/FormData";

class Form extends Component {
  state = { ...data };

  handleValueChange = (event) => {
    const propName = event.target.name;
    const {
      fields,
      fields: {
        [propName]: { validator },
      },
    } = this.state;

    const error = validator(event.target.value, fields.password.value);

    this.setState({
      fields: {
        ...fields,
        [propName]: {
          ...fields[propName],
          value: event.target.value,
          error,
        },
      },
    });
  };

  handleReset = () => {
    const {
      fields,
      fields: { name, email, password, passwordConfirm },
    } = this.state;

    this.setState({
      fields: {
        ...fields,
        name: {
          ...name,
          value: "",
          error: false,
        },
        email: {
          ...email,
          value: "",
          error: false,
        },
        password: {
          ...password,
          value: "",
          error: false,
        },
        passwordConfirm: {
          ...passwordConfirm,
          value: "",
          error: false,
        },
      },
    });
  };

  handleSubmit = (event) => {
    const { fields } = this.state;

    const isValid = Object.values(fields).every(
      (field) => field.error === false && field.value.length !== 0
    );

    if (isValid) {
      console.log("Form has been submitted");
    } else {
      event.preventDefault();
      console.log("Check input data");
    }
  };

  render() {
    const {
      handleReset,
      handleSubmit,
      handleValueChange,
      state: { fields },
    } = this;

    return (
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        {Object.values(fields).map((field) => (
          <Input
            type={field.type}
            name={field.name}
            value={field.value}
            key={field.title}
            placeholder={field.placeholder}
            error={field.error}
            onChange={handleValueChange}
          />
        ))}
        <div className="buttons">
          <Button type="reset" title="Reset" onClick={handleReset} />
          <Button type="submit" title="Submit" />
        </div>
      </form>
    );
  }
}

export default Form;
