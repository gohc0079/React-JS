import React, { Component } from "react";

function Joke(props) {
  return (
    <div>
      <span>{props.value}.</span>
      <span style={{ display: props.jokes.question ? " block" : "none" }}>
        <b>Question: {props.jokes.question}</b>
      </span>
      <p>punchline :{props.jokes.punchline}</p>
    </div>
  );
}

export default Joke;
