import React, { useState, useEffect } from "react";
import {
  isMobile,
  isBrowser,
  BrowserView,
  MobileView,
} from "react-device-detect";
import "../../public/css/App.css"; // CSS
import "../../public/css/Fonts.css"; // CSS Fonts

function App() {
  // State
  const [browserContentWidth, setBrowserContentWidth] = useState(0);
  const [isWebAppsOpen, setWebAppsOpen] = useState(false);
  const [isComponentsOpen, setComponentsOpen] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    const browserContentWidth = 0.7 * window.screen.width;
    setBrowserContentWidth(browserContentWidth);
  });

  return (
    <>
      <BrowserView>
        <div className="portfolio">
          <div className="portfolio-text">Portfolio</div>
        </div>
        <div class="main-content" style={{ width: browserContentWidth }}>
          <div class="main-content-title">Web Applications</div>
          <div class="main-content-text">
            Please browse the following list of web-applications: BROWSER
          </div>
        </div>
      </BrowserView>

      <MobileView>
        <div className="portfolio">
          <div className="portfolio-text">Portfolio</div>
        </div>
        <div class="main-content" style={{ width: "100%" }}>
          <div class="main-content-title">Web Applications</div>
          <div class="main-content-text">
            Please browse the following list of web-applications: MOBILE
          </div>
        </div>
      </MobileView>

      {/* <div className="navbar">
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
          <>
            <div className="navbar-option-dropdown">
              <div className="navbar-option-dropdown-title">Game Stats</div>
              <div className="navbar-option-dropdown-techstack">React</div>
              <div className="navbar-option-dropdown-techstack">Node</div>
              <div className="navbar-option-dropdown-techstack">Express</div>
              <div className="navbar-option-dropdown-techstack">PostgreSQL</div>
              <div className="navbar-option-dropdown-techstack">Heroku</div>
              <br />
              <div className="navbar-option-dropdown-body">
                This web-application allows users to create a player, record
                player statistics, and visualize player data.
              </div>
              <div className="navbar-option-dropdown-link">
                <a href="https://yd-game-stats.herokuapp.com/" target="_blank">
                  https://yd-game-stats.herokuapp.com/
                </a>
              </div>
            </div>
            <div className="navbar-option-dropdown">
              <div className="navbar-option-dropdown-title">Web App 2</div>
              <div className="navbar-option-dropdown-techstack">React</div>
              <div className="navbar-option-dropdown-techstack">Node</div>
              <div className="navbar-option-dropdown-techstack">Express</div>
              <div className="navbar-option-dropdown-techstack">PostgreSQL</div>
              <div className="navbar-option-dropdown-techstack">Heroku</div>
              <br />
              <div className="navbar-option-dropdown-body">
                This web-application features a login system, a user profile,
                and an administrative management system.
              </div>
              <div className="navbar-option-dropdown-link">
                <a href="https://yd-game-stats.herokuapp.com/" target="_blank">
                  https://yd-game-stats.herokuapp.com/
                </a>
              </div>
            </div>
          </>
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
      </div> */}
      {/* <img src="/public/images/coffee1.jpg"></img> */}
    </>
  );
}

export default App;
