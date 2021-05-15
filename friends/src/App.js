import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path={"/FriendsList"} component={FriendsList} />
          <Route path="/login" component={Login} />
          {/* <Route component={Login} /> */}
          {/* <FriendsList path="/Friend-List" component={FriendsList} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
