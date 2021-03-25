import React from 'react';
import Login from './../components/Login.jsx';
import Signup from '../components/Signup.jsx';
import { Switch, Route, Link, withRouter } from "react-router-dom";

const MainContainer = () => {

  return (
    <>
      <div className="nav">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>

      <h1>Hello Homedish</h1>
      <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/signup">
            <Signup />
        </Route>
      </Switch>
    </>
  )
}

export default MainContainer;