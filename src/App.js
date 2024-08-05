import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import RecipeList from './recipe-list';
import RecipeDetail from './RecipeDetails';
import SavouryRecipes from './recipe-list';
import SweetRecipes from './recipe-list';
import Footer from './Footer';

function Home() {
  return (
    <>
    <div className="App-header">
        <Navbar />
        <div className='header'>
          <h1 className='heading1'>CookBook <br/> Delights</h1>
          <p className='paragraph1'>By Siphokazi and Wakhekile</p>
        </div>
        <AboutUs />
        <RecipeList />
          <Footer />
      </div>
      
    </>
  );
}

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:type/:index" element={<RecipeDetail />} />
        <Route path="/savoury-recipes" element={<SavouryRecipes />} />
        <Route path="/sweet-recipes" element={<SweetRecipes />} />
      </Routes>
    
    </Router>
  );
}

export default App;
