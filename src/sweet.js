import './Recipe-list';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';
import sweet1 from './images/sweet1.jpg';
import sweet2 from './images/sweet2.jpg';
import sweet3 from './images/sweet3.jpg';


const SweetDishes = () => {
    const [sweet] = useState([
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
    ])

        const { type, id } = useParams();
        const navigate = useNavigate();
        const recipe = sweet[type][id];
    
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
}

export default SweetDishes


