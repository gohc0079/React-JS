import React, { Component } from "react";
import "./App.css";
import Joke from "./Components/joke";
import Conditional from "./Components/Conditional";
import Products from "./Components/products";
import TodoItems from "./Components/todoItem";
import jokesData from "./jokesData";
import schoolProducts from "./vschoolProducts";
import todosData from "./todo";
import { tsConstructorType, conditionalExpression } from "@babel/types";
import Form from "./Components/FormContainer";

//https://developer.mozilla.org/en-US/Web/API/WindowOrWorkerGlobalScope/fetch
//https://swapi.co/

//function App() {
//map accepts each number as a paramter of a function
/*const jokeArr = jokesData.map(joke => <Joke key={joke.id} jokes={joke} />);
  const ProductsArr = schoolProducts.map(prod => (
    <Products key={prod.id} prods={prod} />
  ));

  //const Arr = numberofCo;
  const todosArr = todosData.map(item => (
    <TodoItems key={item.id} items={item} />
  ));

  return <React.Fragment>{todosArr}</React.Fragment>;*/
//}

function App() {
  return <Form />;
}

export default App;
