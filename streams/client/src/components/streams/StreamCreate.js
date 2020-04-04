import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

//Field is a component and reduxForm is a function

class StreamCreate extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    //Redux form library will compare the validation and see if theres any property on the eror object that has the same name as the input
    //Afterwards, it will pass the object into the renderInput function inside the component and passed as meta

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  /*formValues is passed into by redux-form. Wwhen form is pass into redux-form, redux form will pass a paramter of the 
  form reducer into the functions that are pass into the redux form as paramters.(validate & form)
  For callback functions that are passed into the Field Component, the functions will receive Field built in object properties
  as parameters */
  onSubmit = formValues => {
    console.log(formValues);
    this.props.createStream(formValues);
  };
  /*when Field component is wired up to the component, it does not know how to render an input
  The field component is just to make sure that the redux library is being linked up*/
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

//reduxForm will automatically call connect function
const formWrapped = reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
