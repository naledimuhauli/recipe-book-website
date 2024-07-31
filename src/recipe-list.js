import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeList = () =>{

     // State for savoury recipes
    const [savouryRecipes, setSavouryRecipes] = useState([
        {
            title: 'Spaghetti Carbonara',
            description: 'A classic Italian pasta dish.',
            ingredients: 'Spaghetti, Eggs, Pancetta, Parmesan cheese, Pepper',
            steps: 'Cook pasta, mix with sauce, and serve.',
            pictureUrl: 'https://example.com/spaghetti.jpg'
        },
        {
            title: 'Grilled Chicken Salad',
            description: 'A healthy and delicious salad with grilled chicken.',
            ingredients: 'Chicken, Lettuce, Tomatoes, Cucumber, Olive oil, Lemon juice',
            steps: 'Grill chicken, mix with salad ingredients, and serve.',
            pictureUrl: 'https://example.com/chicken_salad.jpg'
        },
        {
            title: 'Grilled Chicken Salad',
            description: 'A healthy and delicious salad with grilled chicken.',
            ingredients: 'Chicken, Lettuce, Tomatoes, Cucumber, Olive oil, Lemon juice',
            steps: 'Grill chicken, mix with salad ingredients, and serve.',
            pictureUrl: 'https://example.com/chicken_salad.jpg'
        }
    ]);

    // State for sweet recipes
    const [sweetRecipes, setSweetRecipes] = useState([
        {
            title: 'Chocolate Chip Cookies',
            description: 'Delicious cookies with chocolate chips.',
            ingredients: 'Flour, Butter, Sugar, Chocolate chips',
            steps: 'Mix ingredients, bake, and enjoy.',
            pictureUrl: 'https://example.com/cookies.jpg'
        },
        {
            title: 'Cheesecake',
            description: 'A rich and creamy cheesecake.',
            ingredients: 'Cream cheese, Sugar, Eggs, Vanilla extract, Graham crackers',
            steps: 'Mix ingredients, bake, and chill.',
            pictureUrl: 'https://example.com/cheesecake.jpg'
        },
        {
            title: 'Cheesecake',
            description: 'A rich and creamy cheesecake.',
            ingredients: 'Cream cheese, Sugar, Eggs, Vanilla extract, Graham crackers',
            steps: 'Mix ingredients, bake, and chill.',
            pictureUrl: 'https://example.com/cheesecake.jpg'
        }
    ]);



    return (
        <div className='container hero'>
            <h1 className='class-list'>Recipe List</h1>
            <div className='savoury-list'>
            <h1 className='savoury-dishes'>Savoury Dishes</h1>    
        <div className='savoury'>
            {savouryRecipes.map((recipe, index) => (
            <div className='row'>
            <div className='col-4' key={index}>
             <h3 className='savoury-h1'>{recipe.title}</h3>
             <p className='savoury-p'>{recipe.description}</p>
             <img src={recipe.pictureUrl} alt={recipe.pictureUrl} />
            </div>
            </div>
            ))}
            </div>


            <h1 className='savoury-dishes'>Sweet Dishes</h1>    
        <div className='savoury'>
            {sweetRecipes.map((recipe, index) => (
            <div className='row'>
            <div className='col-4' key={index}>
             <h3 className='savoury-h1'>{recipe.title}</h3>
             <p className='savoury-p'>{recipe.description}</p>
             <img src={recipe.pictureUrl} alt={recipe.pictureUrl} />
            </div>
            </div>
            ))}
            </div>
            </div>
        </div>
           
    );
};

export default RecipeList;