import React from "react";
import { Field, reduxForm } from "redux-form";
import { createUser } from "../actions";
import { connect } from "react-redux";

const Register = (props) => {
  const renderField = ({ input, meta, type, placeholder }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <input {...input} type={type} placeholder={placeholder}></input>
        {renderError(meta)}
      </div>
    );
  };

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const onSubmit = (formValues) => {
    props.createUser(formValues);
  };

  return (
    <div className="centered-form">
      <div className="centered-form__box">
        <h1>Register</h1>
        <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
          <Field
            name="name"
            type="text"
            placeholder="Username"
            component={renderField}
          />
          <Field
            name="email"
            placeholder="Email"
            component={renderField}
            type="text"
          />
          <Field
            name="password"
            placeholder="Password"
            type="password"
            component={renderField}
          />
          <Field
            name="age"
            placeholder="Age"
            type="number"
            component={renderField}
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};
  let message = "Please enter your ";
  if (!formValues.name) {
    errors.name = message + "name";
  }
  if (!formValues.email) {
    errors.email = message + "email";
  }
  if (!formValues.password) {
    errors.password = message + "password";
  }
  if (!formValues.age) {
    errors.age = message + "age";
  }

  return errors;
};

const Wrapper = connect(null, { createUser })(Register);

export default reduxForm({
  form: "registerForm",
  validate,
})(Wrapper);
