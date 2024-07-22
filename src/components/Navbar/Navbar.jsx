// Navbar.jsx
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  function toggleMenu() {
    console.log("hi");
  }
  return (
    <section className="container">
      <div id="destop-nav">
        <div className="logo">
          <h1>PZ</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* <div id="hamburger-menu">
        <div className="logo">
          <h1>PZ</h1>
        </div>
        <div className="hamburger-logo">
          <img src={getImageUrl("menuIcon.png")} alt="hamburger-logo" />
        </div>
        <ul className="nav-links">
          <li onClick={toggleMenu()}>
            <a href="#About">About</a>
          </li>
          <li onClick={toggleMenu()}>
            <a href="#Experience">Experience</a>
          </li>
          <li onClick={toggleMenu()}>
            <a href="#Projects">Projects</a>
          </li>
          <li onClick={toggleMenu()}>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div> */}
    </section>
  );
};
