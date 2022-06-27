import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import Input from "../Form/Input";
import { data } from "./data";
import { composeValidators } from "./validators";

class FinalForm extends Component {
  handleSubmit = (props) => {
    console.log(props);
  };

  render() {
    const { fields } = data;

    return (
      <Form onSubmit={this.handleSubmit}>
        {({ handleSubmit, form, submitting, pristine, values }) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(values);
            }}
            onReset={form.reset}
          >
            <h1>Final-Form</h1>
            {Object.values(fields).map((field) => (
              <Field
                key={field.name}
                name={field.name}
                validate={composeValidators(...field.validators)}
              >
                {({ input, meta }) => (
                  <div>
                    <label htmlFor={field.name}></label>
                    <input
                      {...input}
                      id={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                    {meta.error && meta.touched && <p>{meta.error}</p>}
                  </div>
                )}
              </Field>
            ))}
            <div className="buttons">
              <button type="reset" disabled={submitting}>
                Reset
              </button>
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
            </div>
          </form>
        )}
      </Form>
    );
  }
}

export default FinalForm;
