import React, { Component } from "react";
import Calendar from "react-calendar";

class Date extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: ""
    };
  }
  componentDidMount() {
    this.setState({ date: new Date() });
  }
  onChange = date => this.setState({ date });
  render() {
    return (
      <div>
        <Calendar onChange={this.onChange} />
      </div>
    );
  }
}
export default Date;
