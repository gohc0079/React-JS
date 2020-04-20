import React, { useEffect } from "react";
import { connect } from "react-redux";
import Taskform from "./TaskForm";
import { getTask } from "../actions";

const EditTask = (props) => {
  const { getTask, match, task } = props;
  useEffect(() => {
    getTask(match.params.id);
  }, []);

  if (Object.keys(task).length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <React.Fragment>
      <h1>Edit Task</h1>
      <hr className="task-hr" />
      <br />
      <Taskform initialValues={task} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { task: state.tasks };
};
export default connect(mapStateToProps, { getTask })(EditTask);
