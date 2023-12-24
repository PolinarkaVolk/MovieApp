import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/styles.css';
import './Components/Card';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./Components/Main";

//import Films from "./Components/Films";
//import Serials from "./Components/Serials";
//import Cartoons from "./Components/Cartoons";
import Card from "./Components/Card";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main  />} >

            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
