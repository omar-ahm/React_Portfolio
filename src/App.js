
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Contact from './components/ContactPage';
import Project from './components/Project';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <div className="container">
    
      <Header />
        
        <HomePage />
        <ProjectPage />
        <Project />
        <Contact />

    </div>
  );
}

export default App;
