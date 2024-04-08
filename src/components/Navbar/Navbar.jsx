// Navbar.jsx
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Get all sections on the page
      const sections = document.querySelectorAll("section");
      // Calculate the scroll position
      const scrollPosition = window.scrollY;

      // Find the section currently in view
      let currentSection = null;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjusted for better accuracy
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id;
        }
      });

      // Update the active section
      setActiveSection(currentSection);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        {activeSection && (
        <ul
         className={styles.menuItems}
        >
          <li>
            <a href="#about" style={{ fontSize: activeSection === "about" ? "32px" : "20px" }}>About</a>
          </li>
          <li>
            <a href="#skills" style={{ fontSize: activeSection === "skills" ? "32px" : "20px" }}>Skills</a>
          </li>
          <li>
            <a href="#experience" style={{ fontSize: activeSection === "experience" ? "32px" : "20px" }}>Experience</a>
          </li>
          <li>
            <a href="#projects" style={{ fontSize: activeSection === "projects" ? "32px" : "20px" }}>Projects</a>
          </li>
        </ul>
        )}
      </div>
    </nav>
  );
};
