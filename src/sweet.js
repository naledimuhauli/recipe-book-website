import './recipe-list';
import React, { useState } from 'react';
import './App.css';
import savoury1 from './images/savoury1.jpg'

function App() {
    const [sweet] = useState([
        {
            id: 1
            title: "Chocolate Chip Cookies"
            shortDescription: [""]
            ingredients: [" "]
            steps: [""]
            image: sweet1
        },
        {
            id: 2
            title: "Cheesecake"
            shortDescription: ""
            ingredients: ""
            steps: ""
            image: sweet2
        },
        {
            id: 3
            title: "Tiramisu"
            shortDescription: ""
            ingredients: ""
            steps: ""
            image: sweet3
        }
    ])
}


