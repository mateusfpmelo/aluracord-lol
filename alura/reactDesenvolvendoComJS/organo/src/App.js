import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner/Banner';

function App() { // Componente react
  return (
    <div className="App">
      <Banner/>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Alô galera de cowboy! 
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
