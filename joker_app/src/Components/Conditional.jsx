import React, { Component } from "react";
import { statement } from "@babel/template";

function Conditional(props) {
  //condition ? statement if true : statement if false <- ternary operation
  return <h2>Some Cool stuff about conditional rendering</h2>;
}

//Parent component should always handle conditional rendering
export default Conditional;
