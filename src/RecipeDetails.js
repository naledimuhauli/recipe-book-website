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
            description: 'Savoury pasta tossed with a creamy sauce of raw beaten eggs, accentuated with crisp bits of guanciale, and finished with a shower of greated Pecorino Romano cheese plus freshly ground black pepper.',
            pictureUrl: savoury1,
            ingredients: ['2 eggs', 'guanciale(key ingredient)', 'Pecorino Romano cheese', 'spaghetti', 'freshly ground black pepper', 'salt' ],
            steps: ['Cut the guanciale into thick batons', 'Biting through the golden brown crust into meaty bits of salty guanciale', 'Finely grate the pecorino romano cheese','Whisk together the egg, cheese and pepper in a large bowl', 'It needs to be a large bowl because the pasta will be stirred into the sauce in the bowl, off the stove', 'To avoid scrambling the eggs,Cook pasta – Bring 4 litres (4 quarts) of water to the boil with 1 tablespoon of salt', 'Cook the pasta per packet directions', 'It should be firm, not soft, but fully cooked through,Reserve pasta cooking water – Just before draining, scoop out one cup of pasta cooking water', 'Then drain the pasta in a colander', 'Cook guanciale until golden while the pasta is cooking', 'Don’t need any oil, the guanciale will fry in its own fat', 'Toss pasta in guanciale – Tumble the hot pasta into the pan with the guanciale then toss so the pasta gets coated in the guanciale fat', 'Transfer into sauce bowl – Tip the hot pasta into the bowl with the egg and use a rubber spatula to scrape out every drop of the guanciale fat into the bowl', 'That stuff is gold, Add 1/2 cup pasta cooking water into the bowl, mi vigorously with a wooden spoon , spining the pasta around for 30secs to a minute, watch as the watery pale yellow liquid magically transforms into a creamy sauce', 'Then you know its ready! Serve immediately into warm bowls and Enjoy!']
        },
        {
            title: 'Chicken Curry',
            description: 'A traditional Indian dish made by simmering chicken pieces with plenty of spices,herbs,onions and tomatoes',
            pictureUrl: savoury2,
            ingredients: ['1kg chicken pieces', '1 teaspoon Garam Masal powder(key ingredient)', '1 teaspoon coriander powder', '2 tablespoons chopped coriander leaves or mint leaves', '1 small bay/curry leaf', '2 inch cinnamon piece,4 cloves', '3 green cardamoms','1 grated tomato', '1 grated onion',],
            steps: ['Heat 2 tablespoons of oil in heavy bottom pan', 'When oil turns hot add 1 small bay/curry leaf', '2 inch cinnamon piece,4 cloves,3 green cardamoms,1 grated tomato,1 grated onion', 'Add 1 cup grated onion, saute the onions till they turn golden,to speed up add 1 tablespoon of oil', 'Add 1 tablespoon ginger garlic paste, make sure the onions turn golden before adding ginger garlic', 'Saute ginger garlic for about 2 to 3 mins', 'Add 1 grated tomato and salt', 'Next fry until tomatoe turn completely mushy and raw smell is gone', 'Add the following as the same time 1kg chicken pieces, 1 teaspoon Garam Masal powder(key ingredient), 1 teaspoon coriander powder, 2 tablespoons chopped coriander leaves or mint leaves', 'Saute for 3 to 4 mins or untl the chicken turns pale', 'Cover and cook on low heat for about 3 to mins so the chicken absorbs the flavors', 'Pour a cup of hot water', 'Cover your chicken and cook for about 10 mins,laslty prick the chicken to check if its soft then serve with any starch of your choice preferably rice.ENJOY',]
        },
        {
            title: 'Pork Ribs',
            description: 'To-die for Pork Ribs recipe with fall apart meat slathered in a sticky homemade barbecue sauce',
            pictureUrl: savoury3,
            ingredients: ['Worcestershire sauce', 'sugar', 'garlic', 'mustard', 'molasses', 'ketchup', 'cider vinegar', 'paprika', 'thye,cayenne pepper'],
            steps: ['Rub the pork rins with the spices', 'Add cidder vinegar', 'Place your kitchen foil and close your ribs and let them bake at 280 degrees for about 20mins', 'Layer your ribs with the homemade barbecue sauce and place it back in the oven on low heat for about3-5 mins', 'Its ready to serve and enjoy.']
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
