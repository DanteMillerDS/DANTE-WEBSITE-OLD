import './App.css';
import Sidebar from './sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BackgroundImage from './BackgroundImage.jpeg';
import Resume from './Resume';
import AboutMe from './AboutMe';
import Topbar from './topbar';
import Project from './Project';
import Paper from './Paper';
import Contact from './Contact';
import Playbar from './playbar';

function App() {
  
  return (
    
    <Router>
      
      <div 
    className="App" 
  id="bg" 
  style={{ 
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    backgroundSize: '60%',
    position: 'relative',
  }}>
  <div 
    className="overlay" 
    style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0,0.5)', // Change the background color and the opacity value here
    }}>
  </div>
      
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');
      </style>
      <Sidebar />
      <Topbar />
      <Playbar/>
  
    <Routes>
          <Route path='/' />
          <Route path='/aboutme' element={<AboutMe/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/project' element={<Project/>} />
          <Route path='/paper' element={<Paper/>} />
          <Route path='/contact' element={<Contact/>} />
           
    </Routes>
    </div>
     
    </Router>
  );
}

export default App;
