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
              ? "navbar-option navbar-option-opened"
              : "navbar-option"
          }
          onClick={() => {
            isWebAppsOpen ? setWebAppsOpen(false) : setWebAppsOpen(true);
          }}
        >
          WEB APPLICATIONS
        </div>
        {isWebAppsOpen && (
          <div className="navbar-option-dropdown">
            GameStats (React/Node/PostgreSQL)
          </div>
        )}
        <div
          className={
            isComponentsOpen
              ? "navbar-option navbar-option-opened"
              : "navbar-option"
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
            Animated Navbar (React, SVG)
          </div>
        )}
      </div>
      {/* <img src="/public/images/coffee1.jpg"></img> */}
    </>
  );
}

export default App;
