import React from "react";
import history from "../history";
import { connect } from "react-redux";

const Homepage = (props) => {
  if (Object.keys(props.user).length === 0) {
    history.push("/login");
    return <React.Fragment></React.Fragment>;
  }
  return (
    <React.Fragment>
      <h1>DashBoard</h1>
      <hr class="task-hr" />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Homepage);
