import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Contact from './components/ContactPage';
import Project from './components/Project';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <HomePage />
        <ProjectPage />
        <Project />
        <Contact />
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
