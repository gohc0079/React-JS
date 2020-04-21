import React from "react";
import { connect } from "react-redux";
import Taskform from "./TaskForm";
import { createTask } from "../actions";

const CreateTask = (props) => {
  return (
    <div className="container">
      <h1>Create Task</h1>
      <hr className="task-hr" />
      <br />
      <Taskform onSubmit={props.createTask} />
    </div>
  );
};

export default connect(null, { createTask })(CreateTask);
