import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import cookbook from './images/cookbook.jpg'; // Fixed the image import name

const Footer = () => {
    return (
        <div className="container footer pt-3">
            <footer className="d-flex flex-wrap justify-content-between align-items-center border-top">
                <p className="col text-body delights">&copy; CookBook Delights</p>

                <p className="col d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src={cookbook} className="bi me-2 cook-book" alt="Cookbook" />
                </p>

                <ul className="nav col justify-content-end">
                    <li className="nav-item">
                        <Link to="/" className="nav-link px-2">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/recipes" className="nav-link px-2">Recipes</Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
