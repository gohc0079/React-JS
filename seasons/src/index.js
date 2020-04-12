import React from "react";
import ReactDOM from "react-dom";
import useLocationHooks from "./useLocationHooks";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const App = () => {
  const [lat, errorMsg] = useLocationHooks();
  let content;
  if (errorMsg) {
    content = <div>Error:{errorMsg}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div className="border red">{content};</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
