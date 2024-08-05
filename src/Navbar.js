import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () =>{
    return(
        <div className="container">
        <header class="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#" class="nav-link">About Us</a></li>
            <li className="nav-item"><a href="#" class="nav-link">Savoury Recipes</a></li>
            <li className="nav-item"><a href="#" class="nav-link">Sweet Recipes</a></li>
          </ul>
        </header>
      </div>
    )
}

export default Navbar