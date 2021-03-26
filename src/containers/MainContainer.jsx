import React from 'react';
import Login from './../components/Login.jsx';
import Signup from '../components/Signup.jsx';
import RecipeCard from '../components/RecipeCard.jsx';
import { Switch, Route, Link, withRouter } from "react-router-dom";

const MainContainer = () => {

  return (
    <>
      <div className="nav">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>

      <div className="auth-nav">
        <Link to="/create-recipe">Create a Recipe</Link> 
      </div>

      <h1>Hello Homedish</h1>
      <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/signup">
            <Signup />
        </Route>
        <Route path="/create-recipe">
            <RecipeCard />
        </Route>
      </Switch>
    </>
  )
}

export default MainContainer;