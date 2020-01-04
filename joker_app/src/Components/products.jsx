import React, { Component } from "react";

function Products(props) {
  return (
    <div>
      <h2>Name: {props.prods.name}</h2>
      <p>
        Price:
        {props.prods.price.toLocaleString("en-US", {
          style: "currency",
          currency: "SGD"
        })}
      </p>
      <p>Description :{props.prods.description}</p>
    </div>
  );
}

export default Products;
