import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import history from "../history";
import HomePage from "../components/HomePage";
import CreateTask from "../components/CreateTask";
import EditTask from "../components/EditTask";
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
            <Route exact path={["/", "/createTask", "/editTask/:id"]}>
              <Template>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/createTask" exact component={CreateTask}></Route>
                <Route path="/editTask/:id" exact component={EditTask}></Route>
              </Template>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
