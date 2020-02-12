import React, { Component, useState } from "react";
import Date from "./Date";
import Time from "./Time";
class App extends Component {
  render() {
    return (
      <div>
        <Date />
        <Time />
      </div>
    );
  }
}

export default App;
