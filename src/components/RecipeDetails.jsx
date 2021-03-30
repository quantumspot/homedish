import React, { useState, useEffect } from 'react';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(async () => { 
    const recipe = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const recipeJSON = await recipe.json();
    setRecipeDetails({
      id,
      name: recipeJSON.title,
    })
  }, [id])

  const handleOrder = async () => {
    const order = await fetch(`someOrderAPI`);
    
    
  }


  return (<>
    <div> {recipeDetails.name} </div>
    <Button onClick={handleOrder}>Order this ISHHH</Button>
  </>);
}


export default RecipeDetails; 



