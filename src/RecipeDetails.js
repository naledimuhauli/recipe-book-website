// RecipeDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import savoury1 from './images/savoury1.jpg';
import savoury2 from './images/savoury2.jpg';
import savoury3 from './images/savoury3.jpg';
import sweet1 from './images/sweet1.jpg';
import sweet2 from './images/sweet2.jpg';
import sweet3 from './images/sweet3.jpg';
import './App.css';

const recipes = {
    savoury: [
        {
            title: 'Spaghetti Carbonara',
            description: 'A classic Italian pasta dish.',
            pictureUrl: savoury1,
            ingredients: 'Spaghetti, Eggs, Pancetta, Parmesan cheese, Pepper',
            steps: 'Cook pasta, mix with sauce, and serve.'
        },
        {
            title: 'Chicken Curry',
            description: 'A spicy and flavorful chicken curry.',
            pictureUrl: savoury2,
            ingredients: 'Chicken, Spices, Tomatoes, Onion, Garlic, Ginger',
            steps: 'Cook chicken with spices, add tomatoes, and simmer.'
        },
        {
            title: 'Pork Ribs',
            description: 'Pork ribs are tender, flavorful, and perfect for grilling or slow cooking.',
            pictureUrl: savoury3,
            ingredients: 'Pork ribs, BBQ sauce, Salt, Pepper',
            steps: 'Season ribs, grill, and baste with BBQ sauce.'
        }
    ],
    sweet: [
        {
            title: 'Chocolate Chip Cookies',
            description: 'Delicious cookies with chocolate chips.',
            pictureUrl: sweet1,
            ingredients: 'Flour, Butter, Sugar, Chocolate chips',
            steps: 'Mix ingredients, bake, and enjoy.'
        },
        {
            title: 'Cheesecake',
            description: 'A rich and creamy cheesecake.',
            pictureUrl: sweet2,
            ingredients: 'Cream cheese, Sugar, Eggs, Vanilla extract, Graham crackers',
            steps: 'Mix ingredients, bake, and chill.'
        },
        {
            title: 'Tiramisu',
            description: 'A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
            pictureUrl: sweet3,
            ingredients: 'Ladyfingers, Coffee, Mascarpone cheese, Cocoa powder',
            steps: 'Layer ladyfingers with coffee and mascarpone, dust with cocoa.'
        }
    ]
};

const RecipeDetail = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const recipe = recipes[type][id];

    return (
        <div className='container hero'>
            <button className='btn btn-primary' onClick={() => navigate('/')}>Back to Recipes List</button>
            <h1>{recipe.title}</h1>
            <img src={recipe.pictureUrl} alt={recipe.title} className='recipe-img' />
            <p>{recipe.description}</p>
            <h2>Ingredients</h2>
            <p>{recipe.ingredients}</p>
            <h2>Preparation Steps</h2>
            <p>{recipe.steps}</p>
        </div>
    );
};

export default RecipeDetail;
