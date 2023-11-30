import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Add this import
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Students from "./components/Students";
import Manage from "./components/Manage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/manage" element={<Manage />} />
            <Link to="/register">Register</Link> {/* Move the Link components inside the Routes */}
            <Link to="/login">Login</Link> {/* Move the Link components inside the Routes */}
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

