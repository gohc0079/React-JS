import React from "react";
const ErrorBlock = ({ errorMessage }) => {
  return (
    <div className="ui negative message">
      <div className="header">{errorMessage}</div>
    </div>
  );
};

export default ErrorBlock;
