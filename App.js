import Signup from './pages/signup';
import Login from './pages/login';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
// import './App.css';

function App() {
  // let url="./pages/signup";
  // let element=<p>No handle exists for this user!</p>;
  // element=<a href={url}>LinkedIn handle</a>;
  
  return (
    
  
    <div className="app">
      <Routes>
    
              <Route exact path="/" element={<Signup/>}/>
              <Route exact path="/pages/login" element={<Login/>}/>
              <Route exact path="/pages/home" element={<Home/>}/>
      </Routes>
      </div>
  
   
  );
}

export default App;
