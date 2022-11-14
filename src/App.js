import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route exact path="/dashboard" element={<Navbar/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
