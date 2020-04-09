import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "../streams/StreamForm";

//Field is a component and reduxForm is a function

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  /*when Field component is wired up to the component, it does not know how to render an input
  The field component is just to make sure that the redux library is being linked up*/
  render() {
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
