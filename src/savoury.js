import './recipe-list';
import React, { useState } from 'react';
import './App.css';
import savoury1 from './images/savoury1.jpg'

function App() {
    const [savoury] = useState([
        {
            id: 1,
            title: "Spaghetti Cabonara",
            shortDescription: ["Savoury pasta tossed with a creamy sauce of raw beaten eggs, accentuated with crisp bits of guanciale, and finished with a shower of greated Pecorino Romano cheese plus freshly ground black pepper."],
            ingredients: ["2 eggs, guanciale(key ingredient), Pecorino Romano cheese, spaghetti, freshly ground black pepper and salt "],
            steps: [" Cut the guanciale into thick batons. Biting through the golden brown crust into meaty bits of salty guanciale is part of the awesomeness that is carbonara,Finely grate the pecorino romano cheese,Whisk together the egg, cheese and pepper in a large bowl. It needs to be a large bowl because the pasta will be stirred into the sauce in the bowl, off the stove, to avoid scrambling the eggs,Cook pasta – Bring 4 litres (4 quarts) of water to the boil with 1 tablespoon of salt. Cook the pasta per packet directions. It should be firm, not soft, but fully cooked through,Reserve pasta cooking water – Just before draining, scoop out one cup of pasta cooking water. Then drain the pasta in a colander, Cook guanciale until golden while the pasta is cooking. You don’t need any oil, the guanciale will fry in its own fat, Toss pasta in guanciale – Tumble the hot pasta into the pan with the guanciale then toss so the pasta gets coated in the guanciale fat, Transfer into sauce bowl – Tip the hot pasta into the bowl with the egg and use a rubber spatula to scrape out every drop of the guanciale fat into the bowl. That stuff is gold, Add 1/2 cup pasta cooking water into the bowl, mi vigorously with a wooden spoon , spining the pasta around for 30secs to a minute, watch as the watery pale yellow liquid magically transforms into a creamy sauce. Then you know its ready! Serve immediately into warm bowls and Enjoy!"],
            image: savoury1,
        },
        {
            id: 2,
            title: "Chicken Curry",
            shortDescription: ["A traditional Indian dish made by simmering chicken pieces with plenty of spices,herbs,onions and tomatoes"],
            ingredients: ["1kg chicken pieces, 1 teaspoon Garam Masal powder(key ingredient), 1 teaspoon coriander powder, 2 tablespoons chopped coriander leaves or mint leaves,1 small bay/curry leaf, 2 inch cinnamon piece,4 cloves,3 green cardamoms,1 grated tomato,1 grated onion"],
            steps: ["1-Heat 2 tablespoons of oil in heavy bottom pan.When oil turns hot add 1 small bay/curry leaf, 2 inch cinnamon piece,4 cloves,3 green cardamoms,1 grated tomato,1 grated onion.2-Add 1 cup grated onion, saute the onions till they turn golden,to speed up add 1 tablespoon of oil.3-Add 1 tablespoon ginger garlic paste, make sure the onions turn golden before adding ginger garlic.4-Saute ginger garlic for about 2 to 3 mins.5-Add 1 grated tomato and salt.6-Next fry until tomatoe turn completely mushy and raw smell is gone.7-Add the following as the same time 1kg chicken pieces, 1 teaspoon Garam Masal powder(key ingredient), 1 teaspoon coriander powder, 2 tablespoons chopped coriander leaves or mint leaves.8-Saute for 3 to 4 mins or untl the chicken turns pale.9-Cover and cook on low heat for about 3 to mins so the chicken absorbs the flavors.11-Pour a cup of hot water"],
            image: savoury2,
        },
        {
            id: 3,
            title: "Pork Ribs",
            shortDescription: "",
            ingredients: "",
            steps: "",
            image: savoury3,
        }
    ])
}


