import React, { Component } from "react";
import Input from "./Input";
import Button from "../Button";
import "./Form.css";
import data from "../../data/FormData";

class Form extends Component {
  state = { ...data };

  handleValueChange = (event) => {
    const eventTarget = event.target;
    const {
      fields,
      fields: {
        [eventTarget.name]: { validator },
      },
    } = this.state;

    const error = validator(eventTarget.value, fields.password.value);

    this.setState({
      fields: {
        ...fields,
        [eventTarget.name]: {
          ...fields[eventTarget.name],
          value: eventTarget.value,
          error,
        },
      },
    });
  };

  handleReset = () => {
    this.setState({ ...data });
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
    const { fields } = this.state;

    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <h1>Form</h1>
        {Object.values(fields).map((field) => (
          <Input
            type={field.type}
            name={field.name}
            value={field.value}
            key={field.title}
            placeholder={field.placeholder}
            error={field.error}
            onChange={this.handleValueChange}
          />
        ))}
        <div className="buttons">
          <Button type="reset" title="Reset" />
          <Button type="submit" title="Submit" />
        </div>
      </form>
    );
  }
}

export default Form;
