import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import savoury1 from './images/savoury1.jpg';
import savoury2 from './images/savoury2.jpg';
import savoury3 from './images/savoury3.jpg';
import sweet1 from './images/sweet1.jpg';
import sweet2 from './images/sweet2.jpg';
import sweet3 from './images/sweet3.jpg';


const recipes = {
    savoury: [
        {
            title: 'Spaghetti Carbonara',
            description: 'A classic Italian pasta dish.',
            pictureUrl: savoury1,
            ingredients: ['Spaghetti', 'Eggs', 'Parmesan cheese', 'Pancetta', 'Pepper'],
            steps: ['Boil the spaghetti.', 'Fry the pancetta.', 'Mix eggs and cheese.', 'Combine all with spaghetti.']
        },
        {
            title: 'Chicken Curry',
            description: 'A spicy and flavorful chicken curry.',
            pictureUrl: savoury2,
            ingredients: ['Chicken', 'Curry powder', 'Onions', 'Tomatoes', 'Garlic', 'Ginger'],
            steps: ['Cook onions, garlic, and ginger.', 'Add chicken and curry powder.', 'Add tomatoes and simmer.']
        },
        {
            title: 'Pork Ribs',
            description: 'Pork ribs are tender, flavorful, and perfect for grilling or slow cooking.',
            pictureUrl: savoury3,
            ingredients: ['Pork ribs', 'BBQ sauce', 'Salt', 'Pepper', 'Garlic powder'],
            steps: ['Season the ribs.', 'Cook the ribs slowly.', 'Add BBQ sauce and grill.']
        }
    ],
    sweet: [
        {
            title: 'Chocolate Chip Cookies',
            description: 'Delicious cookies with chocolate chips.',
            pictureUrl: sweet1,
            ingredients: ['Flour', 'Sugar', 'Butter', 'Chocolate chips', 'Eggs', 'Vanilla extract'],
            steps: ['Mix dry ingredients.', 'Cream butter and sugar.', 'Combine all and add chips.', 'Bake.']
        },
        {
            title: 'Cheesecake',
            description: 'A rich and creamy cheesecake.',
            pictureUrl: sweet2,
            ingredients: ['Cream cheese', 'Sugar', 'Eggs', 'Graham crackers', 'Butter', 'Vanilla extract'],
            steps: ['Prepare the crust.', 'Mix cream cheese and sugar.', 'Add eggs and vanilla.', 'Bake and chill.']
        },
        {
            title: 'Tiramisu',
            description: 'A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
            pictureUrl: sweet3,
            ingredients: ['Ladyfingers', 'Coffee', 'Mascarpone cheese', 'Eggs', 'Sugar', 'Cocoa powder'],
            steps: ['Dip ladyfingers in coffee.', 'Mix mascarpone and eggs.', 'Layer with ladyfingers.', 'Chill and serve.']
        }
    ]
};

const RecipeDetail = () => {
    const { type, index } = useParams();
    const navigate = useNavigate();
    const recipe = recipes[type][index];

    return (
        <div className='container'>
            <button onClick={() => navigate(-1)} className='btn btn-primary'>Back</button>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <img src={recipe.pictureUrl} alt={recipe.title} className='recipe-img'/>
            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                ))}
            </ul>
            <h3>Steps</h3>
            <ol>
                {recipe.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                ))}
            </ol>
        </div>
    );
};

export default RecipeDetail;
