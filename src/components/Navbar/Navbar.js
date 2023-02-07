import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import Works from "../Works/Works";
import About from "../About/About";

export default function Navbar(){
  return (
    <div>
      <Link to='/' element={<Home />}>Home</Link>
      <Link to='/works' element={<Works />}>Works</Link>
      <Link to='/about' element={<About />}>About</Link>
    </div>
  )
}