import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './recipe-list';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Footer from './Footer';


function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <div className='header'>
     <h1 className='heading1'>CookBook <br/> Delights</h1>
     <p className='paragraph1'>By Siphokazi and Wakhekile</p>
    </div>
    </div>
    <AboutUs />
    <RecipeList />
    <Footer />
    
    </>
  );
}

export default App;
