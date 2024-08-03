import './recipe-list';
import React { useState } from react;
import './App.css';
import savoury1 from './images/savoury1.jpg'

function App() {
    const [recipes] = useState([
        {
            id: 1
            title: "Short Description"
            shortDescription: "Sweet pasta tossed with a creamy sauce of raw beaten eggs, accentuated with crisp bits of guanciale, and finished with a shower of greated Pecorino Romano cheese plus freshly ground black pepper." 
            ingredients: ["2 eggs, guanciale(key ingredient), Pecorino Romano cheese, spaghetti, freshly ground black pepper and salt "]
            steps: [" Cut the guanciale into thick batons. Biting through the golden brown crust into meaty bits of salty guanciale is part of the awesomeness that is carbonara,Finely grate the pecorino romano cheese,Whisk together the egg, cheese and pepper in a large bowl. It needs to be a large bowl because the pasta will be stirred into the sauce in the bowl, off the stove, to avoid scrambling the eggs,Cook pasta – Bring 4 litres (4 quarts) of water to the boil with 1 tablespoon of salt. Cook the pasta per packet directions. It should be firm, not soft, but fully cooked through,Reserve pasta cooking water – Just before draining, scoop out one cup of pasta cooking water. Then drain the pasta in a colander, Cook guanciale until golden while the pasta is cooking. You don’t need any oil, the guanciale will fry in its own fat, Toss pasta in guanciale – Tumble the hot pasta into the pan with the guanciale then toss so the pasta gets coated in the guanciale fat, Transfer into sauce bowl – Tip the hot pasta into the bowl with the egg and use a rubber spatula to scrape out every drop of the guanciale fat into the bowl. That stuff is gold, Add 1/2 cup pasta cooking water into the bowl, mi vigorously with a wooden spoon , spining the pasta around for 30secs to a minute, watch as the watery pale yellow liquid magically transforms into a creamy sauce. Then you know its ready! Serve immediately into warm bowls and Enjoy!"]
            image: "savoury1"
        }
    ])
}


