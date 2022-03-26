import logo from './logo.svg';
import './App.css';
import Shop from './Components/Shop/Shop.js/Shop';
import Questions from './Components/qustions.js/Questions';

function App() {
  return (
    <div className="App">

      <h1>Welcome to our BrandCar Shop </h1>
        <Shop></Shop>
        <Questions></Questions>
    </div>
  );
}

export default App;
