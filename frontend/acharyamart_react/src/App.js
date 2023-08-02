import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import About from "./components/About";
import Mycart from "./components/MyCart";
import Home from "./components/Home";

import LoginReg from "./components/LoginReg";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { getToken } from "./services/localStorage";

const App = () => {
  const {access_token}=getToken()
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            
            <Route path="/mycart" element={<Mycart />} />
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />


            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/account"   element={access_token?<Products/>:<LoginReg/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
