import ChangeColorButton from './Ex1';
import ChangeColorButtonSecond from './Ex2';
import ChangeColorButtonThird from './Ex3';
import LocationButton from './Ex4';
import CatImages from './Ex5';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Task-uri Workshop 1</h1>
        <div className="exercise-section">
          <h2>Exercise 1</h2>
          <ChangeColorButton />
        </div>
        <div className="exercise-section">
          <h2>Exercise 2</h2>
          <ChangeColorButtonSecond />
        </div>
        <div className="exercise-section">
          <h2>Exercise 3</h2>
          <ChangeColorButtonThird />
        </div>
        <div className="exercise-section">
          <h2>Exercise 4</h2>
          <LocationButton />
        </div>
        <div className="exercise-section">
          <h2>Exercise 5</h2>
          <CatImages />
        </div>
      </div>
    </div>
  );
}

export default App;
