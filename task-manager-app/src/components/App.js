import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import history from "../history";
import HomePage from "../components/HomePage";
import CreateTask from "../components/CreateTask";
import Template from "../components/Template";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch history={history}>
            <Route exact path={["/register", "/login"]}>
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
            </Route>
            <Route exact path={["/", "/createTask"]}>
              <Template>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/createTask" exact component={CreateTask}></Route>
              </Template>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
