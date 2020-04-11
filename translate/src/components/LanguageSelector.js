import React, { Component } from "react";
import Context from "../context/LanguageContext";

class LanguageStore extends Component {
  static contextType = Context;
  render() {
    console.log(this.context);
    return (
      <div>
        Select a language :
        <i
          className="flag us"
          onClick={() => {
            this.context.onLanguageChange("english");
          }}
        />
        <i
          className="flag nl"
          onClick={() => {
            this.context.onLanguageChange("dutch");
          }}
        />
      </div>
    );
  }
}
export default LanguageStore;
