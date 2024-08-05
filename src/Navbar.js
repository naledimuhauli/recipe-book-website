import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about-us" className="nav-link">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link to="/savoury-recipes" className="nav-link">Savoury Recipes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/sweet-recipes" className="nav-link">Sweet Recipes</Link>
                </li>
            </ul>
        </header>
    );
};

export default Navbar;
