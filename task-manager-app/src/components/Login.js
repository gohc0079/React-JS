import React from "react";
import { Field, reduxForm } from "redux-form";
import { UserLogin } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Login = (props) => {
  const onSubmit = (formValues) => {
    props.UserLogin(formValues);
  };
  return (
    <div className="centered-form">
      <div className="centered-form__box">
        <h1>Login</h1>
        <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
          <Field
            name="email"
            placeholder="Email"
            component="input"
            type="text"
          />
          <Field
            name="password"
            placeholder="Password"
            type="password"
            component="input"
          />
          <button className="ui button primary">Submit</button>
        </form>
        <p>
          Click <Link to="/register">here</Link> to register
        </p>
      </div>
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};
  let message = "Please enter your ";

  if (!formValues.email) {
    errors.email = message + "email";
  }
  if (!formValues.password) {
    errors.password = message + "password";
  }

  return errors;
};

const Wrapper = connect(null, { UserLogin })(Login);

export default reduxForm({
  form: "loginForm",
  validate,
})(Wrapper);
