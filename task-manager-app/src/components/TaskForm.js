import React, { useRef } from "react";
import { Field, reduxForm } from "redux-form";
import DatePicker, { formatDates, normalizeDates } from "./DatePicker";

const Taskform = (props) => {
  const imageRef = useRef(null);

  const renderInput = ({ input, meta, type, placeholder, label }) => {
    const className = `eight wide field ${
      meta.error && meta.touched ? "error" : ""
    }`;
    return (
      <div className="ui form">
        <div className={className}>
          {label}
          <textarea {...input} type={type} placeholder={placeholder}></textarea>
          {renderError(meta)}
        </div>
      </div>
    );
  };

  const renderCheckbox = ({ input, type, label }) => {
    return (
      <div className="field">
        <div className="ui toggle checkbox ui-switch">
          <input {...input} type={type}></input>
          <label>{label}</label>
        </div>
      </div>
    );
  };

  const renderImage = ({ label }) => {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input ref={imageRef} type="file" accept=".jpg, .png, .jpeg" />
        </div>
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
    const formData = { ...formValues, taskpic: imageRef.current.value };
    props.onSubmit(formData);
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <Field
        label="Description:"
        name="description"
        component={renderInput}
        type="text"
      ></Field>
      <br />
      <Field
        label="Completed"
        name="completed"
        component={renderCheckbox}
        type="checkbox"
      ></Field>
      <br />
      <Field
        label="Task Picture: "
        name="taskpic"
        component={renderImage}
      ></Field>
      <br />
      <Field
        label="Due Date"
        name="due"
        component={DatePicker}
        parse={normalizeDates}
        format={formatDates}
        placeholder="Due Date"
      ></Field>
      <div className="ui-button">
        <button className="ui button primary">Submit</button>
      </div>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  const message = "Please enter a ";
  if (!formValues.description) {
    errors.description = message + "description";
  }
  if (!formValues.due) {
    errors.description = message + "due date";
  }
};

export default reduxForm({ form: "taskForm", validate })(Taskform);
