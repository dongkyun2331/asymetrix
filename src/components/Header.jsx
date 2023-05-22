import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const menu = document.querySelector(".Header");
      menu.classList.toggle("sticky", window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsLogoHovered(true);
  };

  const handleMouseLeave = () => {
    setIsLogoHovered(false);
  };

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header>
      <a
        className="logo"
        href=""
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="./images/logo.png"
          className={`logo-img ${isLogoHovered ? "logo-hover-effect" : ""}`}
          alt="logo image"
        />
        <h1>
          ASYMETRIX
          <br />
          PROTOCOL
        </h1>
      </a>
      <nav>
        <button className="draws">DRAWS</button>
        <button className="app">APP</button>
        <button className="toggle" onClick={handleToggle}>
          <span>DARK MODE</span>
          <div
            className={`toggleContainer ${
              isDarkMode ? "darkmodeContainer" : ""
            }`}
          >
            <span className={`circle ${isDarkMode ? "darkmode" : ""}`}></span>
          </div>
        </button>
        <button className="connect_wallet">CONNECT WALLET</button>
      </nav>
    </header>
  );
}
