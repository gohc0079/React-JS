import React, { useEffect } from "react";
import { connect } from "react-redux";
import Taskform from "./TaskForm";
import { getTask, editTask } from "../actions";

const EditTask = (props) => {
  const { getTask, match, task, editTask } = props;
  useEffect(() => {
    getTask(match.params.id);
  }, []);

  const handleSubmit = (formValues) => {
    editTask(match.params.id, formValues);
  };
  if (Object.keys(task).length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <React.Fragment>
      <h1>Edit Task</h1>
      <hr className="task-hr" />
      <br />
      <Taskform
        initialValues={task}
        imageString={task.taskpic}
        onSubmit={handleSubmit}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { task: state.tasks };
};
export default connect(mapStateToProps, { getTask, editTask })(EditTask);
