import React from "react";
import Header from "./Components/Header";
import Howitworks from "./Components/Howitworks";
import About from "./Components/About";
import Fundraisers from "./Components/Fundraisers";
import Helps from "./Components/Helps";
import Contact from "./Components/Contact"; 
import Login from "./Components/Login";
import Reg from "./Components/Register";
// import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(){
  return(
<div className="App">

 <BrowserRouter>
    <Routes>
    <Route index element={<Header/>}/>
    <Route path="/contact" element={<Contact/>} />
    <Route path="/how" element={<Howitworks/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/fund" element={<Fundraisers/>} />
    <Route path="/need" element={<Helps/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Reg/>}/>
    
    </Routes>
    </BrowserRouter>

    </div> 
  )
}
export default App; 