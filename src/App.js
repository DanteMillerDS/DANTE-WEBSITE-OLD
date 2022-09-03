import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import image from './image.jpeg';
import Resume from './Resume';
import AboutMe from './AboutMe';

function App() {
  return (
    <Router>
      
    <div className="App" id="bg" style={{ 
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundSize: "82%"
     }}>
    <Sidebar />
    <Routes>
          <Route path='/' />
          <Route path='/aboutme' element={<AboutMe/>} />
          <Route path='/resume' element={<Resume/>} />
    </Routes>
    </div>

    </Router>
  );
}

export default App;
