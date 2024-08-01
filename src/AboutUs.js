import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import about from './images/about-us.png';

const AboutUs = () => {
    return(
        <div className= "about-us">
            <div className="container">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg radius">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">About Us</h1>
        <p className="lead">Welcome to Cookbook Delights, your ultimate destination for delicious and easy-to-follow recipes! Our mission is to inspire home cooks of all skill levels with a diverse collection of recipes, from traditional classics to modern twists. Whether you're a seasoned chef or just starting your culinary journey, our curated selection offers something for everyone. We believe in the joy of cooking and the power of sharing good food, and we're here to make your kitchen experiences delightful and stress-free. Join us on this flavorful adventure and discover the joy of cooking with Cookbook Delights!</p>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src={about} alt="" width="400" className='about-picture' />
      </div>
    </div>
  </div>
      </div>
    );
};

export default AboutUs 