import React, { Component } from "react";
import Input from "../Input";
import Button from "../Button";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      fields: {
        name: {
          title: "Name",
          type: "name",
          name: "name",
          value: "",
          error: false,
          placeholder: "Input your name..",
          required: true,
          validator: (value = "") => {
            return value.length >= 2 ? false : "Name is too short";
          },
        },
        email: {
          title: "Email",
          type: "email",
          name: "email",
          value: "",
          error: false,
          placeholder: "Input your email..",
          validator: (value = "") => {
            return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
              ? false
              : "Email is invalid";
          },
        },
        password: {
          title: "Password",
          type: "password",
          name: "password",
          autoComplete: "false",
          value: "",
          error: false,
          required: true,
          placeholder: "Input your password..",
          validator: (value = "") => {
            return value.match(
              /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
            )
              ? false
              : "Password is too simple";
          },
        },
        passwordConfirm: {
          title: "Password confirm",
          type: "password",
          name: "passwordConfirm",
          autoComplete: "false",
          value: "",
          error: false,
          required: true,
          placeholder: "Confirm your password..",
          validator: (value = "", allValues) => {
            return value === allValues ? false : "Passwords dont match";
          },
        },
      },
      buttons: {
        reset: {
          title: "Reset",
          type: null,
          handler: (event) => {
            event.preventDefault();
            const {
              fields: { name, email, password, passwordConfirm },
            } = this.state;
            this.setState({
              fields: {
                ...this.state.fields,
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
          },
        },
        submit: {
          title: "Submit",
          type: "submit",
          handler: (event) => {
            const { fields } = this.state;
            const isValid = Object.values(fields).every(
              (field) => field.error === false
            );
            if (!isValid) {
              event.preventDefault();
            }
          },
        },
      },
      isError: null,
    };
  }

  handleValueChange = (event) => {
    const propName = event.target.name;
    let error;
    const {
      fields: {
        [`${propName}`]: { validator },
      },
    } = this.state;
    if (event.target.name === "passwordConfirm") {
      error = validator(event.target.value, this.state.fields.password.value);
    } else {
      error = validator(event.target.value);
    }

    this.setState({
      fields: {
        ...this.state.fields,
        [`${propName}`]: {
          ...this.state.fields[propName],
          value: event.target.value,
          error,
        },
      },
    });
  };

  render() {
    const { fields, buttons } = this.state;
    return (
      <form>
        <h1>Form</h1>
        {Object.values(fields).map((field) => (
          <Input
            type={field.type}
            name={field.name}
            value={field.value}
            key={field.title}
            placeholder={field.placeholder}
            error={field.error}
            required={field.required}
            onChange={this.handleValueChange}
          />
        ))}
        <div className="buttons">
          {Object.values(buttons).map((button) => (
            <Button
              type={button.type}
              title={button.title}
              onClick={button.handler}
              key={button.title}
            />
          ))}
        </div>
      </form>
    );
  }
}

export default Form;
