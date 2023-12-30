import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import ReactTyped from "react-typed";

const Header = () => {
  //const titles = ["Web Developer", "Data Analyst", "Software Engineer"];
  
  return (
    <header className="header">
      <h1 className="header-title">Priyanka Zala</h1>
      <div>
      {" "}
        <ReactTyped
          strings={["Web Developer", "Data Analyst", "Software Engineer"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
          className="header-content"
        />
      </div>
    </header>
  );
};

export default Header;
