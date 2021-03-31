import React from 'react';
import Login from './../components/Login.jsx';
import Signup from '../components/Signup.jsx';
import Landing from '../components/Landing.jsx';
import RecipeCard from '../components/RecipeCard.jsx';
import Search from '../components/Search.jsx';
import RecipeDetails from '../components/RecipeDetails.jsx';

import { Switch, Route, Link, withRouter } from "react-router-dom";

const MainContainer = () => {
  const mockRecipesFromBackend = [
    {name: 'recipe 1', id: 1},
    {name: 'recipe 2', id: 2},
    {name: 'recipe 3', id: 3},
  ]
  return (
    <>
      <div className="nav">
          <div><Link to="/home"><h2>HomeDish</h2></Link></div>
          <div className="home-nav">
            <div className="login-link"><Link to="/login">Login</Link></div>
            <div className="signup-link"><Link to="/signup">Sign Up</Link></div>
          </div>     
           {/*mockRecipesFromBackend
         .map((recipe) => <Link to={`/recipe-details/${recipe.id}`}>placeholder</Link>)*/}

          <div className="auth-cook-nav" style={{ display: "none"}}>
            <Link to="/create-recipe">Create a Recipe</Link>
            {/* <Link to="/search">My Active Recipes</Link>
            <Link to="/search">Search</Link> */}
          </div>

          <div className="auth-nav" style={{ display: "none"}}>
            <Link to="/search">Search</Link> 
            {/* <Link to="/search">Profile</Link>  */}
          </div>
      </div>

      <Switch>
        <Route path="/home">
            <Landing />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/signup">
            <Signup />
        </Route>
        <Route path="/create-recipe">
            <RecipeCard />
        </Route>

        <Route path="/search">
            <Search />
        </Route>
        <Route path="/recipe-details/:id">
        </Route>
      </Switch>
    </>
  )
}

export default MainContainer;