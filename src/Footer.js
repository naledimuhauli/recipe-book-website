import React from 'react';
import './About.css'
import cookbbok from './images/cookbook.jpg'

const Footer = () => {
    return (
        <div className="container footer pt-3">
  <footer className="d-flex flex-wrap justify-content-between align-items-center border-top">
    <p className="col text-body delights">&copy; CookBook Delights</p>

    <p className="col d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <img src={cookbbok} className="bi me-2 cook-book" alt='' />
    </p>

    <ul className="nav col justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 ">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 ">Recipies</a></li>
    </ul>
  </footer>
</div>
    )
}

export default Footer 