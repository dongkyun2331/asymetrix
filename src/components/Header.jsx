import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsLogoHovered(true);
  };

  const handleMouseLeave = () => {
    setIsLogoHovered(false);
  };

  return (
    <div className="Header">
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
      <ul className="nav">
        <li>DRAWS</li>
        <li>APP</li>
        <li>DARK MODE</li>
        <li>CONNECT WALLET</li>
      </ul>
    </div>
  );
}
