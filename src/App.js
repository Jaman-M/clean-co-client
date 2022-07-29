import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { publicRoute } from './routes/publicRoutes';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Services from './pages/Services';
// import Login from './pages/Login';

// uporer comment kora import gulo publicRoutes er moddhe move kora holo

import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div >  
      <Navbar>
      <Routes>
        {/* <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route> */}

        {
          publicRoute.map(({path, Component}, index) => <Route key = {index} path={path} element = {<Component />}></Route>)
        }
      </Routes>
      </Navbar>
      
    </div>
  );
}

export default App;
