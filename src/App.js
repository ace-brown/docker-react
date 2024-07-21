import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          This is a demo app for testing Docker, CI/CD with React
        </h1>
        <p>
          Welcome! This application is designed as a demonstration to showcase
          the integration of Docker with Continuous Integration and Continuous 
          Deployment (CI/CD) workflows, specifically using React. 
          It highlights how to containerize a React app, automate the build and 
          deployment processes, and ensure seamless updates through a CI/CD pipeline.
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
