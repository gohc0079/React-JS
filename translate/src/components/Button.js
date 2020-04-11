import React, { Component } from "react";
import Context from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends Component {
  //must name as contextType
  //adds property to Button
  // same as Button.contextType = LanguageContext
  //contextType will assign the value of the context to this.context
  // static contextType = LanguageContext;
  //   const text = this.context === "english" ? "Submit" : "Voorlegen";
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => {
          return (
            <button className={`ui button ${color}`}>
              <Context.Consumer>
                {({ language }) =>
                  language === "english" ? "Submit" : "Voorleggen"
                }
              </Context.Consumer>
            </button>
          );
        }}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
