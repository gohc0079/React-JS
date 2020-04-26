import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { UserLogout } from "../actions";
const Template = (props) => {
  return (
    <React.Fragment>
      <div className="ui left visible sidebar inverted vertical menu">
        <Link className="item" to="/">
          <i className="fa fa-th-list"></i> Dashboard
        </Link>
        <Link className="item" to="/createTask">
          <i className="fa fa-plus"></i> New Task
        </Link>
        <Link className="item" to="/editTask/5ea586d1a0f2072bf8c0c76e">
          <i className="fa fa-user"></i> Profile
        </Link>
        <Link className="item" to="/" onClick={props.UserLogout}>
          <i className="fa fa-sign-out"></i>Log Out
        </Link>
      </div>
      <div className="ui pusher ui-div">{props.children}</div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user.isAuthed };
};

export default connect(mapStateToProps, { UserLogout })(Template);
