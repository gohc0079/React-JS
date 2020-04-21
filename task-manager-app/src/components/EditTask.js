import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Taskform from "./TaskForm";
import { getTask, editTask, deleteTask } from "../actions";
import Modal from "../components/Modal/Modal";

const EditTask = (props) => {
  const { getTask, match, task, editTask, deleteTask } = props;
  const [modal, setModal] = useState(null);
  useEffect(() => {
    getTask(match.params.id);
  }, []);

  const handleSubmit = (formValues) => {
    editTask(match.params.id, formValues);
  };

  const onDelete = () => {
    deleteTask(match.params.id);
  };

  const renderActions = () => {
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => {
            onDelete(match.params.id);
          }}
        >
          Delete
        </button>
        <button
          className="ui button"
          onClick={() => {
            setModal(null);
          }}
        >
          Cancel
        </button>
      </React.Fragment>
    );
  };

  const showModal = () => {
    setModal(
      <Modal
        onDismiss={onDismiss}
        actions={renderActions()}
        content={`Deleting ${task.description} ... Are you sure you want to delete task?`}
        title="Delete Task"
      />
    );
  };

  const onDismiss = () => {
    setModal(null);
  };

  if (Object.keys(task).length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <React.Fragment>
      <h1 className="title">Edit Task</h1>
      <i
        className="trash alternate icon"
        style={{ fontSize: "22px" }}
        onClick={() => {
          showModal();
        }}
      ></i>
      <hr className="task-hr" />
      <br />
      {modal}
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
export default connect(mapStateToProps, { getTask, editTask, deleteTask })(
  EditTask
);
