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
  const [windowInnerWidth, setWindowInnerWidth] = useState(0);
  const [browserContentWidth, setBrowserContentWidth] = useState(0);
  const [message, setMessage] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    getWindowWidth();
    getContentWidth();

    window.onorientationchange = function (event) {
      getContentWidth();
      setMessage(message + "\nOrientation Changed");
    };

    window.onresize = function (event) {
      getContentWidth();
      setMessage(message + "\nOrientation Changed");
    };
  });

  function getWindowWidth() {
    const windowWidth = window.innerWidth;
    setWindowInnerWidth(windowWidth);
  }

  function getContentWidth() {
    const browserContentWidth = isBrowser
      ? 0.7 * window.screen.width
      : window.innerWidth - 40;
    setBrowserContentWidth(browserContentWidth);
  }

  return (
    <>
      <BrowserView>
        <div className="portfolio">
          <div className="portfolio-text">Portfolio</div>
        </div>
        <div className="main-content" style={{ width: browserContentWidth }}>
          <div className="main-content-title">Web Applications</div>
          <div className="main-content-text">
            Please browse the following list of web-applications: BROWSER.
          </div>
        </div>
      </BrowserView>

      <MobileView>
        <div className="portfolio">
          <div className="portfolio-text">Portfolio</div>
        </div>
        <div
          className="main-content-mobile"
          style={{ width: browserContentWidth }}
        >
          <div className="main-content-title">Web Applications</div>
          <div className="main-content-text">
            Please browse the following list of web-applications: MOBILE.
          </div>
        </div>
      </MobileView>

      {/* <img src="/public/images/coffee1.jpg"></img> */}
    </>
  );
}

export default App;
