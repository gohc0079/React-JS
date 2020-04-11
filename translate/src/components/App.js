import React, { Component } from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector ></LanguageSelector>
          <ColorContext.Provider value="purple">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
