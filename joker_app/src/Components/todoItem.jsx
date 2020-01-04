import React, { Component } from "react";

function TodoItems(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#D3D3D3",
    textDecoration: "line-through"
  };
  return (
    <div className="todo-item">
      <span>
        <input
          type="checkbox"
          onChange={() => props.onHandle(props.items.id)}
          checked={props.items.completed}
        />
      </span>

      <span style={props.items.completed ? completedStyle : null}>
        {props.items.text}
      </span>
    </div>
  );
}

export default TodoItems;
