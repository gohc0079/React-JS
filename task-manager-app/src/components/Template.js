import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "../history";
import { UserLogout } from "../actions";
const Template = (props) => {
  if (Object.keys(props.user).length === 0) {
    history.push("/login");
  }
  return (
    <React.Fragment>
      <div className="ui left visible sidebar inverted vertical menu">
        <Link className="item" to="/">
          <i className="fa fa-th-list"></i> Dashboard
        </Link>
        <Link className="item" to="/createTask">
          <i className="fa fa-plus"></i> New Task
        </Link>
        <Link className="item" to="/editTask/5e9f05b93d727705083c6a67">
          <i className="fa fa-user"></i> Profile
        </Link>
        <Link className="item" to="/login" onClick={props.UserLogout}>
          <i className="fa fa-sign-out"></i>Log Out
        </Link>
      </div>
      <div className="ui pusher ui-div">{props.children}</div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { UserLogout })(Template);
