import React from "react";

import { connect } from "react-redux";

const Homepage = (props) => {
  return (
    <React.Fragment>
      <h1>DashBoard</h1>
      <hr className="task-hr" />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Homepage);
