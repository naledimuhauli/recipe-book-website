import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const RecipeList = () => {
    // State for savoury recipes
    const [savouryRecipes] = useState([
        {
            title: 'Spaghetti Carbonara',
            description: 'A classic Italian pasta dish.',
            pictureUrl: ''
        },
        {
            title: 'Chicken Curry',
            description: 'A spicy and flavorful chicken curry.',
            pictureUrl: 'https://example.com/chicken_curry.jpg'
        },
        {
            title: 'Pork Ribs',
            description: 'A healthy and delicious salad with grilled chicken.',
            pictureUrl: 'https://example.com/chicken_salad.jpg'
        }
    ]);

    // State for sweet recipes
    const [sweetRecipes] = useState([
        {
            title: 'Chocolate Chip Cookies',
            description: 'Delicious cookies with chocolate chips.',
            pictureUrl: 'https://example.com/cookies.jpg'
        },
        {
            title: 'Cheesecake',
            description: 'A rich and creamy cheesecake.',
            pictureUrl: 'https://example.com/cheesecake.jpg'
        },
        {
            title: 'Tiramisu',
            description: 'A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
            pictureUrl: 'https://example.com/tiramisu.jpg'
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