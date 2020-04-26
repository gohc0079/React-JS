import React from "react";
import { Field, reduxForm } from "redux-form";
import { UserLogin } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ErrorBlock from "./ErrorBlock";
const Login = (props) => {
  const onSubmit = (formValues) => {
    props.UserLogin(formValues);
    props.reset();
  };

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
  return (
    <div className="centered-form">
      <div className="centered-form__box">
        <h1>Login</h1>
        <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
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
          <button className="ui button primary">Submit</button>

          <div style={{ marginTop: "20px" }}>
            {props.status && props.status >= 400 ? (
              <ErrorBlock errorMessage={props.errorMessage.error} />
            ) : null}
          </div>
        </form>
        <div
          className="ui bottom attached warning message"
          style={{ marginTop: "20px" }}
        >
          Click <Link to="/register">here</Link> to register
        </div>
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

const mapStateToProps = (state) => {
  return { status: state.user.status, errorMessage: state.user.data };
};

const Wrapper = connect(mapStateToProps, { UserLogin })(Login);

export default reduxForm({
  form: "loginForm",
  validate,
})(Wrapper);
