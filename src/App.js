import logo from './logo.svg';
import './App.css';
import Home from './Todo/Home';
import About from './Todo/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from './Todo/Base';
import Login from './Todo/Login';
import React from 'react';
import ShowHide from './Todo/ShowHide';
import Products from './Todo/Products';
import Welcome from './Todo/Welcome';
import Cardsusingarray_1 from './Todo/Cardsusingarray_1';




function App() {
  
  return (
    <div className="App">
     <Base>
     <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home/>} ></Route>

        <Route path="about" element={<About/>} ></Route>
        <Route path="Login" element={<Login/>} ></Route>
        <Route path="ShowHide" element={<ShowHide/>} ></Route>
        <Route path="Products" element={<Products/>} ></Route>
        <Route path="Welcome" element={<Welcome/>} ></Route>
        <Route path="Cardsusingarray_1" element={<Cardsusingarray_1/>} ></Route>

      </Routes>
     </BrowserRouter>


     </Base>
    </div>
  );
}

export default App;
