import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for client-side navigation
import './App.css'; // Import CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling
import savoury1 from './images/savoury1.jpg'; // Import images
import savoury2 from './images/savoury2.jpg';
import savoury3 from './images/savoury3.jpg';
import sweet1 from './images/sweet1.jpg';
import sweet2 from './images/sweet2.jpg';
import sweet3 from './images/sweet3.jpg';

// Functional component for displaying the list of recipes
const RecipeList = () => {
    // define State for savoury recipes
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
            {/* Title for the recipes list section */}
            <h1 className='class-list'>Recipes List</h1>
            
            {/* Section for savoury dishes */}
            <div className='savoury-list'>
                <h1 className='savoury-dishes'>Savoury Dishes</h1>
                <div className='savoury'>
                {/* Use map to iterate over savouryRecipes and sweetRecipes arrays to display each recipe. */}
                    {savouryRecipes.map((recipe, index) => (
                        // Display each savoury recipe
                        <div className='row row-recipe' key={index}>
                            <div className='col'>
                                <h3 className='savoury-h1'>{recipe.title}</h3>
                                <p className='savoury-p'>{recipe.description}</p>
                                <img src={recipe.pictureUrl} alt={recipe.title} className='recipe-img'/>
                                {/* Link to recipe detail page with recipe type and index */}
                                <Link to={`/recipe/savoury/${index}`}>
                                    <button className='savoury-btn'>View Recipe</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section for sweet dishes */}
                <h1 className='savoury-dishes'>Sweet Dishes</h1>
                <div className='savoury'>
                    {sweetRecipes.map((recipe, index) => (
                        // Display each sweet recipe
                        <div className='row row-recipe' key={index}>
                            <div className='col'>
                                <h3 className='savoury-h1'>{recipe.title}</h3>
                                <p className='savoury-p'>{recipe.description}</p>
                                <img src={recipe.pictureUrl} alt={recipe.title} className='recipe-img'/>
                                {/* Link to recipe detail page with recipe type and index */}
                                <Link to={`/recipe/sweet/${index}`}>
                                    <button className='savoury-btn'>View Recipe</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecipeList;
