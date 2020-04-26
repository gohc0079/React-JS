import React from "react";
import { useSelector } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import history from "../history";
import HomePage from "../components/HomePage";
import CreateTask from "../components/CreateTask";
import EditTask from "../components/EditTask";
import Template from "../components/Template";

const App = () => {
  const loginAuth = useSelector((state) => state.user.isAuthed);

  return (
    <div>
      <Router history={history}>
        <div>
          {!loginAuth && (
            <Switch history={history}>
              <Route exact path={["/register", "/"]}>
                <Route path="/register" exact component={Register} />
                <Route path="/" exact component={Login} />
              </Route>
            </Switch>
          )}
          {loginAuth && (
            <Switch history={history}>
              <Route exact path={["/createTask", "/editTask/:id", "/"]}>
                <Template>
                  <Route
                    path="/createTask"
                    exact
                    component={CreateTask}
                  ></Route>
                  <Route
                    path="/editTask/:id"
                    exact
                    component={EditTask}
                  ></Route>
                  <Route path="/" exact component={HomePage}></Route>
                </Template>
              </Route>
            </Switch>
          )}
        </div>
      </Router>
    </div>
  );
};

export default App;
