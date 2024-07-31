import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './recipe-list';


function App() {
  return (
    <>
    <div className="App">
      <div className='header'>
     <h1 className='heading1'>Cooking <br/> Book</h1>
     <p className='paragraph1'>By Siphokazi and Wakhekile</p>
    </div>
    </div>
    <RecipeList />
    </>
  );
}

export default App;
