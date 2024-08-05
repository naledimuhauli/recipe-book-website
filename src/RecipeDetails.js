import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import savoury1 from './images/savoury1.jpg';
import savoury2 from './images/savoury2.jpg';
import savoury3 from './images/savoury3.jpg';
import sweet1 from './images/sweet1.jpg';
import sweet2 from './images/sweet2.jpg';
import sweet3 from './images/sweet3.jpg';
import './recipedetails.css';

// Object containing savoury and sweet recipes with their details
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
            description: 'To-die for Pork Ribs recipe with fall-apart meat slathered in a sticky homemade barbecue sauce.',
            pictureUrl: savoury3,
            ingredients: [
                '2 racks of pork ribs (about 4 pounds)',
                '1/2 cup Worcestershire sauce',
                '1/2 cup brown sugar',
                '2 cloves garlic, minced',
                '2 tablespoons Dijon mustard',
                '1/4 cup molasses',
                '1 cup ketchup',
                '1/4 cup apple cider vinegar',
                '1 tablespoon paprika',
                '1 teaspoon dried thyme',
                '1 teaspoon cayenne pepper (optional, for heat)',
                'Salt and pepper to taste'
            ],
            steps: [
                'Preheat your oven to 280°F (138°C).',
                'Remove the silver skin from the back of the ribs if it’s still attached.',
                'In a small bowl, combine paprika, dried thyme, cayenne pepper (if using), salt, and pepper. Rub this mixture evenly over both sides of the ribs.',
                'In a medium saucepan, combine Worcestershire sauce, brown sugar, minced garlic, Dijon mustard, molasses, ketchup, and apple cider vinegar.',
                'Simmer over medium heat for 10-15 minutes, stirring occasionally, until the sauce thickens slightly.',
                'Place the seasoned ribs on a large piece of aluminum foil. Wrap the ribs tightly in the foil.',
                'Bake in the preheated oven for about 2.5 to 3 hours, or until the ribs are tender.',
                'Remove the ribs from the oven and carefully unwrap them.',
                'Brush a generous amount of the homemade barbecue sauce over the ribs.',
                'For a caramelized finish, place the sauced ribs under a broiler for 3-5 minutes, watching closely to avoid burning.',
                'Let the ribs rest for a few minutes before slicing. Serve with additional barbecue sauce on the side.'
            ]
        }

    ],
    sweet: [
        {
            title: 'Chocolate Chip Cookies',
            description: 'Delicious cookies with chocolate chips.',
            pictureUrl: sweet1,
            ingredients: [
                '2 1/4 cups all-purpose flour',
                '1/2 teaspoon baking soda',
                '1 cup unsalted butter, room temperature',
                '1/2 cup granulated sugar',
                '1 cup packed brown sugar',
                '1 teaspoon salt',
                '2 teaspoons vanilla extract',
                '2 large eggs',
                '2 cups semisweet chocolate chips'
            ],
            steps: [
                'Preheat oven to 350°F (175°C).',
                'In a small bowl, whisk together flour and baking soda; set aside.',
                'In a large bowl, beat the butter, granulated sugar, brown sugar, and salt until creamy.',
                'Add vanilla extract and eggs; beat well.',
                'Gradually beat in the flour mixture.',
                'Stir in the chocolate chips.',
                'Drop rounded tablespoons of dough onto ungreased baking sheets.',
                'Bake for 10 to 12 minutes or until golden brown.',
                'Cool on baking sheets for a few minutes, then transfer to wire racks to cool completely.'
            ]
        },
        {
            title: 'Cheesecake',
            description: 'A rich and creamy cheesecake with a graham cracker crust.',
            pictureUrl: sweet2,
            ingredients: [
                '1 1/2 cups graham cracker crumbs',
                '1/4 cup granulated sugar',
                '1/2 cup unsalted butter, melted',
                '4 packages (8 oz each) cream cheese, softened',
                '1 cup granulated sugar',
                '1 teaspoon vanilla extract',
                '4 large eggs',
                '1 cup sour cream',
                '1 cup heavy cream'
            ],
            steps: [
                'Preheat oven to 325°F (163°C).',
                'Combine graham cracker crumbs, sugar, and melted butter in a bowl. Press the mixture into the bottom of a springform pan.',
                'In a large bowl, beat the cream cheese until smooth.',
                'Add sugar and vanilla extract; beat until well combined.',
                'Add eggs one at a time, beating well after each addition.',
                'Add sour cream and heavy cream; mix until smooth.',
                'Pour the filling over the crust in the springform pan.',
                'Bake for 50 to 60 minutes or until the center is set and the edges are lightly golden.',
                'Turn off the oven and let the cheesecake cool inside with the door slightly open for 1 hour.',
                'Refrigerate for at least 4 hours or overnight before serving.'
            ]
        },
        {
            title: 'Tiramisu',
            description: 'A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
            pictureUrl: sweet3,
            ingredients: [
                '6 large egg yolks',
                '3/4 cup granulated sugar',
                '1 cup heavy cream',
                '1 cup mascarpone cheese, room temperature',
                '1 cup strong brewed coffee, cooled',
                '1/2 cup coffee liqueur (optional)',
                '24 to 30 ladyfingers',
                '2 tablespoons cocoa powder, for dusting'
            ],
            steps: [
                'In a large bowl, whisk together egg yolks and sugar until pale and thick.',
                'In a separate bowl, beat heavy cream until stiff peaks form.',
                'Fold mascarpone cheese into the egg yolk mixture until smooth.',
                'Gently fold in the whipped cream.',
                'Combine coffee and coffee liqueur (if using) in a shallow dish.',
                'Dip ladyfingers quickly into the coffee mixture, then arrange in a single layer in the bottom of a serving dish.',
                'Spread half of the mascarpone mixture over the ladyfingers.',
                'Add another layer of dipped ladyfingers and top with the remaining mascarpone mixture.',
                'Cover and refrigerate for at least 4 hours, or overnight for best flavor.',
                'Dust with cocoa powder before serving.'
            ]
        }
    ]
};

// RecipeDetail component to display detailed information about a selected recipe
const RecipeDetail = () => {

    // Extracting the type (savoury or sweet) and index of the recipe from the URL parameters
    const { type, index } = useParams();

    // useNavigate hook to programmatically navigate back to the previous page when the back button is clicked.
    const navigate = useNavigate();

     // Selecting the appropriate recipe based on the type and index
    const recipe = recipes[type][index];

    return (
        <div className='container container-details'>
            {/* Back button to navigate to the previous page */}
            <button onClick={() => navigate(-1)} className='btn btn-primary back-button'>Back</button>
            <h2 className='title'>{recipe.title}</h2>
            <img src={recipe.pictureUrl} alt={recipe.title} className='recipes-picture'/>
            <p className='description'>{recipe.description}</p>
            <h3 className='ingredients-h3'>Ingredients</h3>
            <ul className='ingredients'>
                {recipe.ingredients.map((ingredient, idx) => (
                    // ingredient: This is the current element of the array being processed. For each iteration, it holds the value of the ingredient
                    <li key={idx}>{ingredient}</li>
                    // idx: This is the index of the current element being processed in the array. It’s passed as the second argument to the callback function.
                ))}
            </ul>
            <h3 className='steps-h3'>Steps</h3>
            <ol className='steps'>
            {/* map Method: Similar to the ingredients, the map method is used here to iterate over each step in the steps array. */}
                {recipe.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                ))}
            </ol>
        </div>
    );
};

export default RecipeDetail;
