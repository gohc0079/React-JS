import React, { useEffect, useState, useRef } from "react";
import { getTasks } from "../actions";
import { connect } from "react-redux";
import TableDetails from "./TableDetails";
import moment from "moment";

const Homepage = (props) => {
  const currDate = moment().format("YYYY-MM-DD");
  const [date, setDate] = useState("");
  const [taskObjs, setTask] = useState([]);
  const childComponentRef = useRef(null);
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

  console.log(childComponentRef);

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
            setDate(currDate);
          }}
        >
          Today
        </button>
        <button
          className="tablinks"
          onClick={() => {
            const nextDay = moment().add(1, "days").format("YYYY-MM-DD");
            setDate(nextDay);
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
          ref={childComponentRef}
          details={taskObjs}
          headers={["ID", "Description", "Completed", ""]}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { tasks: Object.values(state.tasks) };
};

export default connect(mapStateToProps, { getTasks })(Homepage);
