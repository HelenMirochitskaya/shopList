import './App.css';
import image from './grocery.jpg';
import imageTwo from './man.jpg';
import GroseryList from './GroceryList';

function App() {
  return(
    <div className='app'>

      <div className="container">
      <img src={image} width='250px' alt='grocery'/>
      </div>
      <div className="container">
      <h1>
        Grocery List
      </h1>
    </div>
      <GroseryList />
    <div className="container">
      <img src={imageTwo} width='250px' alt='man' />
    </div>


    </div>
  )
 
}

export default App;

