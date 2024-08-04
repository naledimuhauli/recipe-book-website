import React from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '.recipe-list';
import './App.css';

const recipeDetails = () => {
    const { recipeDetails } = useParams();
    const recipeDetails = recipes[recipeDetails];

    return (
        <div>
            <h1>{recipeDetails.chart(0).toUppercase() + recipeDetails.slice(1)} Recipes</h1>
            < div className="recipe-container">
                {recipeDetails.map(recipe =>(
                    <div key={recipe.id} className="recipe.card">
                        <h2>{recipe.name}</h2>
                        <img src={recipe.image} alt={recipe.name} className="recipe.image"></img>
                        <h3>Short Description</h3>
                        <p>{recipe.description}</p>
                        <h3>Steps:</h3>
                        <p>{recipe.instructions}</p>
                    </div>
                ))}
            </div>
        </div>
    )

};

export default RecipeDetails