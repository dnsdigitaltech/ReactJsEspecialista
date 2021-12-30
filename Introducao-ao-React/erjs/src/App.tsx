import './App.css';
import Clock from './Clock';
import Person from './Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Clock />
        <Person />
        <p>
          Olá mundo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
