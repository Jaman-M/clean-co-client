import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Servics from './pages/Servics';
import Login from './pages/Login';

function App() {
  return (
    <div >  
      <Navbar>
      <Home></Home>
      <About></About>
      <Contact></Contact>
      <Servics></Servics>
      <Login></Login>
      </Navbar>
      
    </div>
  );
}

export default App;
