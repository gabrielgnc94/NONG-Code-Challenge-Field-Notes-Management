import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
const loggedIn = false;

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          {loggedIn ? <h1>You are Logged</h1> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
