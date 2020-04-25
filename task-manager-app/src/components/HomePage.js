import React, { useEffect, useState } from "react";
import { getTasks } from "../actions";
import { connect } from "react-redux";
import TableDetails from "./TableDetails";

const Homepage = (props) => {
  const [date, setDate] = useState("");
  const [taskObjs, setTask] = useState([]);

  let clickEvent = null;
  useEffect(() => {
    props.getTasks();
    handleClick();
  }, []);

  useEffect(() => {
    if (date !== "") {
      const taskObj = props.tasks.filter((task) => {
        const croppedDate = task.due.substring(0, 10);
        return croppedDate === date;
      });
      setTask([...taskObj]);
    } else {
      setTask([...props.tasks]);
    }
  }, [props.tasks, date]);

  const handleClick = () => {
    clickEvent.click();
    clickEvent.focus();
  };

  return (
    <div className=" container">
      <h1>DashBoard</h1>
      <hr className="task-hr" />
      <br />
      <div className="tab">
        <button
          ref={(e) => (clickEvent = e)}
          className="tablinks"
          onClick={() => {
            setDate("2020-04-22");
          }}
        >
          Today
        </button>
        <button
          className="tablinks"
          onClick={() => {
            setDate("2020-04-23");
          }}
        >
          Tomorrow
        </button>
        <button
          className="tablinks"
          onClick={() => {
            setDate("");
          }}
        >
          History
        </button>
      </div>
      <div>
        <TableDetails
          details={taskObjs}
          headers={["ID", "Description", "Completed"]}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { tasks: Object.values(state.tasks) };
};

export default connect(mapStateToProps, { getTasks })(Homepage);
