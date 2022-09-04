import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BackgroundImage from './BackgroundImage.jpeg';
import Resume from './Resume';
import AboutMe from './AboutMe';
import { AiFillLinkedin, AiOutlineMail,AiOutlineTwitter} from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import Topbar from './topbar';

function App() {
  return (
    <Router>
      
    <div className="App" id="bg" style={{ 
      backgroundImage: `url(${BackgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundSize: "82%"
     }}>
    <Topbar />
    <Sidebar />
    <Routes>
          <Route path='/' />
          <Route path='/aboutme' element={<AboutMe/>} />
          <Route path='/resume' element={<Resume/>} />
    </Routes>
    
    </div>
    <GoMarkGithub />
    <AiFillLinkedin />
    <AiOutlineTwitter />
    <AiOutlineMail />
    </Router>
  );
}

export default App;
