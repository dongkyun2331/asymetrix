import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [c222Color, setc222Color] = useState("#222");
  const [cfffColor, setcfffColor] = useState("#fff");

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

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    const Header = document.querySelector(".Header");
    const body = document.querySelector("body");
    const draws = document.querySelector(".draws");
    const app = document.querySelector(".app");
    const toggle = document.querySelector(".toggle");
    const connectWallet = document.querySelector(".connect_wallet");
    const mint = document.querySelector(".mint");
    const rewards = document.querySelector(".rewards");
    const footerA = document.querySelectorAll(".footer-a");
    const previousDrawsPath = document.querySelectorAll(
      "div > .previous_draws-svg > path"
    );
    const h3previousDrawsPath = document.querySelectorAll(
      ".previous_draws > .previous_draws-svg > path"
    );
    const previousDrawsElement = document.querySelector(".previous_draws");
    previousDrawsElement.addEventListener("mouseover", function () {
      this.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    });
    const initialDistribution = document.querySelector(".initial_distribution");
    const claimTokens = document.querySelector(".claim_tokens > button");
    const lavender = document.querySelector(".lavender");
    const inProtocol = document.querySelector(".in_protocol");
    const hr = document.querySelector(".hr");
    const drawWinningOdds = document.querySelector(".draw_winning_odds");

    Header.classList.toggle("b222");
    body.classList.toggle("b222");
    draws.classList.toggle("cfff");
    app.classList.toggle("cfff");
    toggle.classList.toggle("cfff");
    connectWallet.classList.toggle("cfff");
    mint.classList.toggle("b3a4c4a");
    mint.classList.toggle("cfff");
    rewards.classList.toggle("b222");
    footerA.forEach((element) => {
      element.classList.toggle("cfff");
    });
    previousDrawsPath.forEach((path) => {
      path.classList.toggle("ffff80");
    });
    h3previousDrawsPath.forEach((path) => {
      path.classList.toggle("ffff");
    });
    previousDrawsElement.addEventListener("mouseout", function () {
      this.style.backgroundColor = "";
    });
    initialDistribution.classList.toggle("border-top1px222");
    claimTokens.classList.toggle("claim_tokens-darkmode");
    lavender.classList.toggle("cfff");
    lavender.classList.toggle("b444a55");
    inProtocol.classList.toggle("cfff");
    hr.classList.toggle("border-top1px222");
    drawWinningOdds.classList.toggle("cfff");

    if (c222Color === "#fff") {
      setc222Color("#222");
    } else {
      setc222Color("#fff");
    }
    if (cfffColor === "#222") {
      setcfffColor("#fff");
    } else {
      setcfffColor("#222");
    }
  };

  const handleBarsClick = () => {
    const modal = document.querySelector(".modal");
    const dimm = document.querySelector(".dimm");
    const bodyapp = document.querySelector(".bodyapp");
    const footer = document.querySelector(".footer");

    modal.classList.toggle("modal-on");
    dimm.classList.toggle("modal-on");
    bodyapp.classList.toggle("blur");
    footer.classList.toggle("blur");
  };

  useEffect(() => {
    const modal = document.querySelector(".modal");
    const dimm = document.querySelector(".dimm");
    const bodyapp = document.querySelector(".bodyapp");
    const footer = document.querySelector(".footer");
    const connectModal = document.querySelector(".connect_wallet-modal");
    const connectDimm = document.querySelector(".connect-dimm");
    const logo = document.querySelector(".logo");
    const nav = document.querySelector(".nav");

    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        modal.classList.remove("modal-on");
        dimm.classList.remove("modal-on");
        bodyapp.classList.remove("blur");
        footer.classList.remove("blur");
        connectModal.classList.remove("modal-on");
        connectDimm.classList.remove("modal-on");
        logo.classList.remove("blur");
        nav.classList.remove("blur");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleConnectClick = () => {
    const connectModal = document.querySelector(".connect_wallet-modal");
    const connectDimm = document.querySelector(".connect-dimm");
    const logo = document.querySelector(".logo");
    const nav = document.querySelector(".nav");
    const bodyapp = document.querySelector(".bodyapp");
    const footer = document.querySelector(".footer");

    connectModal.classList.toggle("modal-on");
    connectDimm.classList.toggle("modal-on");
    logo.classList.toggle("blur");
    nav.classList.toggle("blur");
    bodyapp.classList.toggle("blur");
    footer.classList.toggle("blur");
  };

  return (
    <header className="Header">
      <a className="logo" href="">
        <svg className="logo-svg">
          <g className="logo-g">
            <path
              d="M1 22.5008L22.4292 1L43 13L25 55L1 22.5008Z"
              fill={cfffColor}
              stroke={c222Color}
              strokeWidth="2"
              strokeLinejoin="bevel"
            ></path>
            <path
              d="M22.4287 1L25 55"
              stroke={c222Color}
              strokeDasharray="6 3"
            ></path>
          </g>
          <path
            d="M62.697 25H65.034L60.512 11.434H56.864L52.361 25H54.641L55.876 21.105H61.443L62.697 25ZM58.232 13.657H59.049L60.778 19.072H56.522L58.232 13.657ZM79.1715 15.006C78.8675 12.688 76.9295 11.187 74.0415 11.187C70.8495 11.187 69.1015 12.916 69.1015 15.082C69.1015 17.115 70.3745 18.255 72.4835 18.654L75.1245 19.167C76.3405 19.414 77.1765 19.908 77.1765 21.181C77.1765 22.53 75.9605 23.252 74.2695 23.252C72.5785 23.252 71.1725 22.701 70.8685 21.029H68.5505C68.7975 23.537 70.8875 25.247 74.1745 25.247C77.7465 25.247 79.4755 23.29 79.4755 21.086C79.4755 18.73 77.9935 17.647 75.9225 17.191C75.4285 17.096 73.7945 16.792 73.3765 16.697C72.3315 16.507 71.4005 16.146 71.4005 15.025C71.4005 13.771 72.5785 13.182 74.0035 13.182C75.6945 13.182 76.5685 13.79 76.8535 15.006H79.1715ZM88.4478 17.229L85.1988 11.434H82.7478L87.5738 20.003V25H89.8538V20.003L94.6798 11.434H92.2288L88.9798 17.229H88.4478ZM98.9383 25H101.104V14.151H101.56L104.41 20.098H106.728L109.597 14.151H110.053V25H112.219V11.434H108.59L105.816 17.343H105.36L102.548 11.434H98.9383V25ZM120.068 22.929V19.034H125.977V17.001H120.068V13.505H127.535V11.434H117.788V25H127.782V22.929H120.068ZM142.225 11.434H131.262V13.448H135.613V25H137.893V13.448H142.225V11.434ZM146.487 11.434V25H148.767V19.604H151.921C152.32 19.604 152.719 19.623 153.118 19.566L155.037 25H157.355L155.265 19.072C156.576 18.407 157.298 17.191 157.298 15.519C157.298 12.954 155.626 11.434 152.681 11.434H146.487ZM148.767 13.448H152.358C154.277 13.448 154.98 14.189 154.98 15.538C154.98 16.83 154.277 17.628 152.358 17.628H148.767V13.448ZM162.5 11.434V25H164.78V11.434H162.5ZM178.606 25H181.171L177.276 17.78L180.677 11.434H178.302L175.509 16.621H174.863L172.127 11.434H169.733L173.077 17.856L169.182 25H171.652L174.844 19.129H175.49L178.606 25ZM53.653 32.434V46H55.933V40.851H59.619C62.659 40.851 64.369 39.274 64.369 36.614C64.369 34.011 62.659 32.434 59.619 32.434H53.653ZM55.933 38.837V34.448H59.277C61.31 34.448 62.051 35.246 62.051 36.633C62.051 38.001 61.31 38.837 59.277 38.837H55.933ZM69.8253 32.434V46H72.1053V40.604H75.2593C75.6583 40.604 76.0573 40.623 76.4563 40.566L78.3753 46H80.6933L78.6033 40.072C79.9143 39.407 80.6363 38.191 80.6363 36.519C80.6363 33.954 78.9643 32.434 76.0193 32.434H69.8253ZM72.1053 34.448H75.6963C77.6153 34.448 78.3183 35.189 78.3183 36.538C78.3183 37.83 77.6153 38.628 75.6963 38.628H72.1053V34.448ZM92.127 32.187C87.909 32.187 85.648 35.265 85.648 39.217C85.648 43.169 87.909 46.247 92.127 46.247C96.326 46.247 98.587 43.169 98.587 39.217C98.587 35.265 96.326 32.187 92.127 32.187ZM92.127 44.176C89.239 44.176 87.966 41.896 87.966 39.217C87.966 36.538 89.239 34.258 92.127 34.258C94.996 34.258 96.269 36.538 96.269 39.217C96.269 41.896 94.996 44.176 92.127 44.176ZM113.51 32.434H102.547V34.448H106.898V46H109.178V34.448H113.51V32.434ZM123.952 32.187C119.734 32.187 117.473 35.265 117.473 39.217C117.473 43.169 119.734 46.247 123.952 46.247C128.151 46.247 130.412 43.169 130.412 39.217C130.412 35.265 128.151 32.187 123.952 32.187ZM123.952 44.176C121.064 44.176 119.791 41.896 119.791 39.217C119.791 36.538 121.064 34.258 123.952 34.258C126.821 34.258 128.094 36.538 128.094 39.217C128.094 41.896 126.821 44.176 123.952 44.176ZM144.76 41.896C144.399 43.34 143.297 44.176 141.625 44.176C138.832 44.176 137.559 41.896 137.559 39.217C137.559 36.538 138.851 34.258 141.644 34.258C143.24 34.258 144.171 34.904 144.608 36.196H147.002C146.508 33.783 144.532 32.187 141.644 32.187C137.559 32.187 135.241 35.132 135.241 39.217C135.241 43.302 137.54 46.247 141.625 46.247C144.703 46.247 146.698 44.461 147.154 41.896H144.76ZM158.393 32.187C154.175 32.187 151.914 35.265 151.914 39.217C151.914 43.169 154.175 46.247 158.393 46.247C162.592 46.247 164.853 43.169 164.853 39.217C164.853 35.265 162.592 32.187 158.393 32.187ZM158.393 44.176C155.505 44.176 154.232 41.896 154.232 39.217C154.232 36.538 155.505 34.258 158.393 34.258C161.262 34.258 162.535 36.538 162.535 39.217C162.535 41.896 161.262 44.176 158.393 44.176ZM172.627 43.853V32.434H170.347V46H180.018V43.853H172.627Z"
            fill={c222Color}
          ></path>
        </svg>
      </a>
      <nav className="nav">
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
        <button className="connect_wallet " onClick={handleConnectClick}>
          CONNECT WALLET
        </button>
      </nav>
      <div className="width1024">
        <button className="connect_wallet" onClick={handleConnectClick}>
          CONNECT WALLET
        </button>
        <button className="bars" onClick={handleBarsClick}>
          <svg className="bars-svg">
            <path d="M6 26H30" stroke="#222" strokeWidth="2"></path>
            <path d="M6 18H30" stroke="#222" strokeWidth="2"></path>
            <path d="M6 10H30" stroke="#222" strokeWidth="2"></path>
          </svg>
        </button>
      </div>
      <div className="modal">
        <div className="modal-top">
          <svg className="logo-svg" onClick={handleBarsClick}>
            <g className="logo-g">
              <path
                d="M1 22.5008L22.4292 1L43 13L25 55L1 22.5008Z"
                fill="#222"
                stroke="#fff"
                strokeWidth="2"
                strokeLinejoin="bevel"
              ></path>
              <path
                d="M22.4287 1L25 55"
                stroke="#fff"
                strokeDasharray="6 3"
              ></path>
            </g>
            <path
              d="M62.697 25H65.034L60.512 11.434H56.864L52.361 25H54.641L55.876 21.105H61.443L62.697 25ZM58.232 13.657H59.049L60.778 19.072H56.522L58.232 13.657ZM79.1715 15.006C78.8675 12.688 76.9295 11.187 74.0415 11.187C70.8495 11.187 69.1015 12.916 69.1015 15.082C69.1015 17.115 70.3745 18.255 72.4835 18.654L75.1245 19.167C76.3405 19.414 77.1765 19.908 77.1765 21.181C77.1765 22.53 75.9605 23.252 74.2695 23.252C72.5785 23.252 71.1725 22.701 70.8685 21.029H68.5505C68.7975 23.537 70.8875 25.247 74.1745 25.247C77.7465 25.247 79.4755 23.29 79.4755 21.086C79.4755 18.73 77.9935 17.647 75.9225 17.191C75.4285 17.096 73.7945 16.792 73.3765 16.697C72.3315 16.507 71.4005 16.146 71.4005 15.025C71.4005 13.771 72.5785 13.182 74.0035 13.182C75.6945 13.182 76.5685 13.79 76.8535 15.006H79.1715ZM88.4478 17.229L85.1988 11.434H82.7478L87.5738 20.003V25H89.8538V20.003L94.6798 11.434H92.2288L88.9798 17.229H88.4478ZM98.9383 25H101.104V14.151H101.56L104.41 20.098H106.728L109.597 14.151H110.053V25H112.219V11.434H108.59L105.816 17.343H105.36L102.548 11.434H98.9383V25ZM120.068 22.929V19.034H125.977V17.001H120.068V13.505H127.535V11.434H117.788V25H127.782V22.929H120.068ZM142.225 11.434H131.262V13.448H135.613V25H137.893V13.448H142.225V11.434ZM146.487 11.434V25H148.767V19.604H151.921C152.32 19.604 152.719 19.623 153.118 19.566L155.037 25H157.355L155.265 19.072C156.576 18.407 157.298 17.191 157.298 15.519C157.298 12.954 155.626 11.434 152.681 11.434H146.487ZM148.767 13.448H152.358C154.277 13.448 154.98 14.189 154.98 15.538C154.98 16.83 154.277 17.628 152.358 17.628H148.767V13.448ZM162.5 11.434V25H164.78V11.434H162.5ZM178.606 25H181.171L177.276 17.78L180.677 11.434H178.302L175.509 16.621H174.863L172.127 11.434H169.733L173.077 17.856L169.182 25H171.652L174.844 19.129H175.49L178.606 25ZM53.653 32.434V46H55.933V40.851H59.619C62.659 40.851 64.369 39.274 64.369 36.614C64.369 34.011 62.659 32.434 59.619 32.434H53.653ZM55.933 38.837V34.448H59.277C61.31 34.448 62.051 35.246 62.051 36.633C62.051 38.001 61.31 38.837 59.277 38.837H55.933ZM69.8253 32.434V46H72.1053V40.604H75.2593C75.6583 40.604 76.0573 40.623 76.4563 40.566L78.3753 46H80.6933L78.6033 40.072C79.9143 39.407 80.6363 38.191 80.6363 36.519C80.6363 33.954 78.9643 32.434 76.0193 32.434H69.8253ZM72.1053 34.448H75.6963C77.6153 34.448 78.3183 35.189 78.3183 36.538C78.3183 37.83 77.6153 38.628 75.6963 38.628H72.1053V34.448ZM92.127 32.187C87.909 32.187 85.648 35.265 85.648 39.217C85.648 43.169 87.909 46.247 92.127 46.247C96.326 46.247 98.587 43.169 98.587 39.217C98.587 35.265 96.326 32.187 92.127 32.187ZM92.127 44.176C89.239 44.176 87.966 41.896 87.966 39.217C87.966 36.538 89.239 34.258 92.127 34.258C94.996 34.258 96.269 36.538 96.269 39.217C96.269 41.896 94.996 44.176 92.127 44.176ZM113.51 32.434H102.547V34.448H106.898V46H109.178V34.448H113.51V32.434ZM123.952 32.187C119.734 32.187 117.473 35.265 117.473 39.217C117.473 43.169 119.734 46.247 123.952 46.247C128.151 46.247 130.412 43.169 130.412 39.217C130.412 35.265 128.151 32.187 123.952 32.187ZM123.952 44.176C121.064 44.176 119.791 41.896 119.791 39.217C119.791 36.538 121.064 34.258 123.952 34.258C126.821 34.258 128.094 36.538 128.094 39.217C128.094 41.896 126.821 44.176 123.952 44.176ZM144.76 41.896C144.399 43.34 143.297 44.176 141.625 44.176C138.832 44.176 137.559 41.896 137.559 39.217C137.559 36.538 138.851 34.258 141.644 34.258C143.24 34.258 144.171 34.904 144.608 36.196H147.002C146.508 33.783 144.532 32.187 141.644 32.187C137.559 32.187 135.241 35.132 135.241 39.217C135.241 43.302 137.54 46.247 141.625 46.247C144.703 46.247 146.698 44.461 147.154 41.896H144.76ZM158.393 32.187C154.175 32.187 151.914 35.265 151.914 39.217C151.914 43.169 154.175 46.247 158.393 46.247C162.592 46.247 164.853 43.169 164.853 39.217C164.853 35.265 162.592 32.187 158.393 32.187ZM158.393 44.176C155.505 44.176 154.232 41.896 154.232 39.217C154.232 36.538 155.505 34.258 158.393 34.258C161.262 34.258 162.535 36.538 162.535 39.217C162.535 41.896 161.262 44.176 158.393 44.176ZM172.627 43.853V32.434H170.347V46H180.018V43.853H172.627Z"
              fill="#fff"
            ></path>
          </svg>
          <button className="close" onClick={handleBarsClick}>
            <svg className="close-svg">
              <path d="M6 29.5L29 6.5" stroke="#fff" strokeWidth="3"></path>
              <path d="M29 29.5L6 6.5" stroke="#fff" strokeWidth="3"></path>
            </svg>
          </button>
        </div>
        <nav className="modal-nav">
          <a className="draws">DRAWS</a>
          <a className="app">APP</a>
          <a className="toggle" onClick={handleToggle}>
            <span>DARK MODE</span>
            <div
              className={`toggleContainer ${
                isDarkMode ? "darkmodeContainer" : ""
              }`}
            >
              <span className={`circle ${isDarkMode ? "darkmode" : ""}`}></span>
            </div>
          </a>
        </nav>
      </div>
      <div className="dimm" onClick={handleBarsClick}></div>
      <div className="connect_wallet-modal">
        <h2>
          CONNECT WALLET{" "}
          <button className="connect_wallet-close" onClick={handleConnectClick}>
            <svg width="24" height="24" viewBox="0 0 36 36">
              <path d="M6 29.5L29 6.5" stroke="#222" strokeWidth="3"></path>
              <path d="M29 29.5L6 6.5" stroke="#222" strokeWidth="3"></path>
            </svg>
          </button>
        </h2>
        <div className="connect_wallet-modal-btns">
          <button>
            <svg>
              <path
                d="M4 6.5L7 4.5L1 0L5.5 2H8V12H7.5L7 12.5L5 11H0.5L1.5 7.5L4 6.5Z"
                fill="#F4831F"
              ></path>
              <path
                d="M12 6.5L9 4.5L15 0L10.5 2H8V12H8.5L9 12.5L11 11H15.5L14.5 7.5L12 6.5Z"
                fill="#F4831F"
              ></path>
              <path
                d="M8 13.5V15H6.5L5 13.5L7 12.5L6.5 13.5H8Z"
                fill="#BEAB9C"
              ></path>
              <path
                d="M8 13.5V15H9.5L11 13.5L9 12.5L9.5 13.5H8Z"
                fill="#BEAB9C"
              ></path>
              <path d="M8 13.5V12H7.5L7 12.5L6.5 13.5H8Z" fill="#222"></path>
              <path d="M8 13.5V12H8.5L9 12.5L9.5 13.5H8Z" fill="#222"></path>
              <path
                d="M5 11L7 12.5L5 13.5L1.5 14.5L0.5 11H3L5 13.5V11Z"
                fill="#E27625"
              ></path>
              <path
                d="M11 11L9 12.5L11 13.5L14.5 14.5L15.5 11H13L11 13.5V11Z"
                fill="#E27625"
              ></path>
              <path d="M5 13.5V11H3L5 13.5Z" fill="#CB6128"></path>
              <path d="#CB6128"></path>
              <path d="M11 13.5V11H13L11 13.5Z" fill="#CB6128"></path>
              <path d="M6 9L7 10L5 9.5L6 9Z" fill="#222"></path>
              <path d="M10 9L9 10L11 9.5L10 9Z" fill="#222"></path>
              <path d="M4 8L5 9.5L6 9L7 10V8H4Z" fill="#CD6427"></path>
              <path d="M12 8L11 9.5L10 9L9 10V8H12Z" fill="#CD6427"></path>
              <path d="M7 4.5L4 8H7V4.5Z" fill="#E27624"></path>
              <path d="M9 4.5L12 8H9V4.5Z" fill="#E27624"></path>
              <path
                d="M7 4.5L1 0L0 2.5L1.5 7.5L4 6.5L7 4.5Z"
                fill="#763E1A"
              ></path>
              <path
                d="M9 4.5L15 0L16 2.5L14.5 7.5L12 6.5L9 4.5Z"
                fill="#763E1A"
              ></path>
            </svg>
            METAMASK
          </button>
          <button>
            <svg>
              <path
                d="M8 12C5.79 12 4 10.21 4 8C4 5.79 5.79 4 8 4C9.86 4 11.41 5.28 11.86 7H15.93C15.44 3.05 12.08 0 8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.08 16 15.44 12.95 15.93 9H11.86C11.41 10.72 9.86 12 8 12Z"
                fill="#0052FF"
              ></path>
            </svg>
            COINBASE WALLET
          </button>
          <button>
            <svg>
              <rect width="16" height="16" rx="2" fill="#141414"></rect>
              <path
                d="M4.16146 5.48351C6.28145 3.40784 9.71869 3.40784 11.8387 5.48351L12.0939 5.73331C12.1191 5.75771 12.1391 5.78692 12.1527 5.8192C12.1664 5.85148 12.1734 5.88617 12.1734 5.92122C12.1734 5.95627 12.1664 5.99096 12.1527 6.02324C12.1391 6.05552 12.1191 6.08473 12.0939 6.10913L11.2211 6.9637C11.1954 6.98866 11.161 7.00262 11.1251 7.00262C11.0893 7.00262 11.0549 6.98866 11.0292 6.9637L10.678 6.61992C9.19905 5.17187 6.80109 5.17187 5.32216 6.61992L4.94615 6.98808C4.92044 7.01304 4.88602 7.027 4.85019 7.027C4.81435 7.027 4.77993 7.01304 4.75422 6.98808L3.88142 6.13351C3.85626 6.1091 3.83626 6.0799 3.8226 6.04762C3.80894 6.01534 3.8019 5.98064 3.8019 5.94559C3.8019 5.91054 3.80894 5.87585 3.8226 5.84357C3.83626 5.81129 3.85626 5.78209 3.88142 5.75768L4.16146 5.48351ZM13.6438 7.25079L14.4205 8.01138C14.4457 8.03577 14.4657 8.06498 14.4794 8.09726C14.493 8.12954 14.5001 8.16424 14.5001 8.19929C14.5001 8.23434 14.493 8.26904 14.4794 8.30132C14.4657 8.3336 14.4457 8.3628 14.4205 8.3872L10.9179 11.8167C10.8665 11.8666 10.7977 11.8945 10.726 11.8945C10.6543 11.8945 10.5855 11.8666 10.5341 11.8167L8.0481 9.3827C8.03524 9.37021 8.01803 9.36323 8.00011 9.36323C7.9822 9.36323 7.96498 9.37021 7.95213 9.3827L5.46615 11.8166C5.41473 11.8665 5.34589 11.8944 5.27422 11.8944C5.20255 11.8944 5.13371 11.8665 5.08229 11.8166L1.57951 8.38729C1.55436 8.36289 1.53435 8.33368 1.5207 8.3014C1.50704 8.26912 1.5 8.23443 1.5 8.19938C1.5 8.16433 1.50704 8.12964 1.5207 8.09736C1.53435 8.06508 1.55436 8.03587 1.57951 8.01147L2.35635 7.25088C2.40777 7.20095 2.47662 7.17303 2.54828 7.17303C2.61995 7.17303 2.6888 7.20095 2.74021 7.25088L5.22628 9.68467C5.23914 9.69715 5.25635 9.70414 5.27427 9.70414C5.29218 9.70414 5.30939 9.69715 5.32225 9.68467L7.80814 7.25079C7.85956 7.20086 7.9284 7.17294 8.00007 7.17294C8.07173 7.17294 8.14058 7.20086 8.192 7.25079L10.678 9.68476C10.6908 9.69725 10.708 9.70423 10.726 9.70423C10.7439 9.70423 10.7611 9.69725 10.7739 9.68476L13.2599 7.25088C13.3113 7.20095 13.3802 7.17303 13.4519 7.17303C13.5235 7.17303 13.5924 7.20095 13.6438 7.25088V7.25079Z"
                fill="white"
              ></path>
            </svg>
            WALLETCONNECT
          </button>
          <p>
            By connecting a wallet, you agree to
            <br />
            Asymetrix Protocol <a href="">Terms of Service</a> and
            <br />
            consent to <a href="">Privacy Policy</a>.
          </p>
        </div>
      </div>
      <div className="connect-dimm" onClick={handleConnectClick}></div>
    </header>
  );
}
