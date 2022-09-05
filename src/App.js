import logo from './logo.svg';
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
function App() {
  
  return (
    
    <Router>
      
    <div className="App" id="bg" style={{ 
      backgroundImage: `url(${BackgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: "100%",
     }}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');
      </style>
      <Sidebar />
      <Topbar />
      
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
