import React from "react";
import Header from "./Components/Header.jsx";
import MemeGenerator from "./Components/MemeGenerator.jsx";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MemeGenerator />
    </React.Fragment>
  );
}

export default App;
