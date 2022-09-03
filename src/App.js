import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import image from './image.jpeg';
function App() {
  return (
    <Router>
    <div className="App" id="bg" style={{ 
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundSize: "81%"
     }}>
      
    <Sidebar />
      
  
    </div>
    </Router>
  );
}

export default App;
