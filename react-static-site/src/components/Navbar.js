import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <nav className="nav"> */}
      <div className="logo">
        <img src="/logo512.png" alt="react" />
        <h2>ReactFacts</h2>
      </div>
      <p>React Course - Project 1</p>
      {/* </nav> */}
    </div>
  );
};

export default Navbar;
