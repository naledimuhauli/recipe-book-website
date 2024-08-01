import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import savoury1 from './images/savoury1.jpg';
import savoury2 from './images/savoury2.jpg';
import savoury3 from './images/savoury3.jpg';
import sweet1 from './images/sweet1.jpg';
import sweet2 from './images/sweet2.jpg';
import sweet3 from './images/sweet3.jpg';

const RecipeList = () => {
    // State for savoury recipes
    const [savouryRecipes] = useState([
        {
            title: 'Spaghetti Carbonara',
            description: 'A classic Italian pasta dish.',
            pictureUrl: savoury1
        },
        {
            title: 'Chicken Curry',
            description: 'A spicy and flavorful chicken curry.',
            pictureUrl: savoury2
        },
        {
            title: 'Pork Ribs',
            description: 'Pork ribs are tender, flavorful, and perfect for grilling or slow cooking.',
            pictureUrl: savoury3
        }
    ]);

    // State for sweet recipes
    const [sweetRecipes] = useState([
        {
            title: 'Chocolate Chip Cookies',
            description: 'Delicious cookies with chocolate chips.',
            pictureUrl: sweet1
        },
        {
            title: 'Cheesecake',
            description: 'A rich and creamy cheesecake.',
            pictureUrl: sweet2
        },
        {
            title: 'Tiramisu',
            description: 'A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
            pictureUrl: sweet3
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
                            <div className='col' key={index}>
                                <h3 className='savoury-h1'>{recipe.title}</h3>
                                <p className='savoury-p'>{recipe.description}</p>
                                <img src={recipe.pictureUrl} alt={recipe.pictureUrl}  className='recipe-img'/>
                                <button className='savoury-btn'>View Recipe</button>
                            </div>
                        </div>
                    ))}
                </div>


                <h1 className='savoury-dishes'>Sweet Dishes</h1>
                <div className='savoury'>
                    {sweetRecipes.map((recipe, index) => (
                        <div className='row'>
                            <div className='col' key={index}>
                                <h3 className='savoury-h1'>{recipe.title}</h3>
                                <p className='savoury-p'>{recipe.description}</p>
                                <img src={recipe.pictureUrl} alt={recipe.pictureUrl} className='recipe-img'/>
                                <button className='savoury-btn'>View Recipe</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default RecipeList;
