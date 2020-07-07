import React, { useState } from "react";
import { isMobile, isBrowser } from "react-device-detect";
import "../../public/css/App.css"; // CSS
import "../../public/css/Fonts.css"; // CSS Fonts

function App() {
  // State
  const [isWebAppsOpen, setWebAppsOpen] = useState(false);
  const [isComponentsOpen, setComponentsOpen] = useState(false);

  return (
    <>
      <div className="portfolio">
        <div className="portfolio-text">Portfolio</div>
      </div>
      <div className="navbar">
        <div
          className={
            isWebAppsOpen
              ? isBrowser
                ? "navbar-option-browser navbar-option-opened"
                : "navbar-option-mobile navbar-option-opened"
              : isBrowser
              ? "navbar-option-browser"
              : "navbar-option-mobile"
          }
          onClick={() => {
            isWebAppsOpen ? setWebAppsOpen(false) : setWebAppsOpen(true);
          }}
        >
          WEB APPLICATIONS
        </div>
        {isWebAppsOpen && (
          <div className="navbar-option-dropdown">
            <div className="navbar-option-dropdown-title">GameStats</div>
            <div className="navbar-option-dropdown-techstack">React</div>
            <div className="navbar-option-dropdown-techstack">Node</div>
            <div className="navbar-option-dropdown-techstack">PostgreSQL</div>
            <div className="navbar-option-dropdown-body">
              This web-application allows users to create a player, record
              player statistics, and visualize player data.
            </div>
          </div>
        )}
        <div
          className={
            isComponentsOpen
              ? isBrowser
                ? "navbar-option-browser navbar-option-opened"
                : "navbar-option-mobile navbar-option-opened"
              : isBrowser
              ? "navbar-option-browser"
              : "navbar-option-mobile"
          }
          onClick={() => {
            isComponentsOpen
              ? setComponentsOpen(false)
              : setComponentsOpen(true);
          }}
        >
          COMPONENTS
        </div>
        {isComponentsOpen && (
          <div className="navbar-option-dropdown">
            <br />
            <div className="navbar-option-dropdown">
              Animated Navbar (React, SVG)
            </div>
            <br />
          </div>
        )}
      </div>
      {/* <img src="/public/images/coffee1.jpg"></img> */}
    </>
  );
}

export default App;
