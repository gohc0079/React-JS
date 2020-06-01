import React, { useEffect, useState } from "react";
import { getTasks } from "../actions";
import { connect, useDispatch } from "react-redux";
import TableDetails from "./TableDetails";
import moment from "moment";
import TabList from "./TabList";

const Homepage = ({ tasks, getTasks }) => {
  const currDate = moment().format("YYYY-MM-DD");
  const nextDate = moment().add(1, "days").format("YYYY-MM-DD");
  const [date, setDate] = useState("");
  const [taskObjs, setTask] = useState([]);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    if (date !== "") {
      const taskObj = tasks.filter((task) => {
        const croppedDate = task.due.substring(0, 10);
        return croppedDate === date;
      });
      setTask([...taskObj]);
    } else {
      setTask([...tasks]);
    }
  }, [tasks, date]);

  return (
    <div className=" container">
      <h1>DashBoard</h1>
      <hr className="task-hr" />
      <br />
      <TabList
        dates={{
          Today: currDate,
          Tomorrow: nextDate,
          History: "",
        }}
        onHandleClick={{ setDate, dispatch, setPage }}
      />
      <div>
        <TableDetails
          details={taskObjs}
          headers={["ID", "Description", "Completed", ""]}
          onClick={setPage}
          page={page}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { tasks: Object.values(state.tasks), page: state.page };
};

export default connect(mapStateToProps, { getTasks })(Homepage);
