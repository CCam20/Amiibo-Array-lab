import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home";

import NavBar from '../src/Components/UI/NavBar';

import Basket from './Components/Basket';

function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/basket' element={<Basket/>} />
        </Routes>
    {/* <AmiiboContainer/> */}
    </Router>


  );
}

export default App;
