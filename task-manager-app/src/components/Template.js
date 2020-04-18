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
        <Link className="item" to="">
          <i className="fa fa-plus"></i> New Task
        </Link>
        <Link className="item" to="/">
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

export default connect(null, { UserLogout })(Template);
