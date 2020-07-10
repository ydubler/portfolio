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
  const [contentWidthMax, setContentWidthMax] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [message, setMessage] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    getWindowWidth();
    getContentWidthMax();
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

  function getContentWidthMax() {
    let contentWidthMax = 0;

    if (isBrowser) {
      contentWidthMax = 0.7 * window.screen.width;
    } else {
      contentWidthMax = window.screen.width - 46;
    }

    setContentWidthMax(contentWidthMax);
  }

  function getContentWidth() {
    let contentWidth = 0;

    if (isBrowser) {
      contentWidth =
        window.innerWidth >= contentWidthMax
          ? 0.7 * window.screen.width
          : window.innerWidth - 46;
    } else {
      contentWidth = window.screen.width - 46;
    }

    setContentWidth(contentWidth);
  }

  return (
    <>
      <BrowserView>
        <div className="portfolio" style={{ minWidth: "400px" }}>
          <div className="portfolio-text">Portfolio</div>
        </div>
        <div
          className="main-content"
          style={{
            width: contentWidth,
            minWidth: "400px",
          }}
        >
          <div className="main-content-title">Web Applications</div>
          <div className="main-content-text">
            Please browse the following list of web-applications: BROWSER.
            <br />
            contentWidth: {contentWidth}
            <br />
            contentWidthMax: {contentWidthMax}
          </div>
        </div>
      </BrowserView>

      <MobileView>
        <div className="portfolio">
          <div className="portfolio-text">Portfolio</div>
        </div>
        <div className="main-content-mobile" style={{ width: contentWidth }}>
          <div className="main-content-title">Web Applications</div>
          <div className="main-content-text">
            Please browse the following list of web-applications: MOBILE.
            <br />
            contentWidth: {contentWidth}
            <br />
            contentWidthMax: {contentWidthMax}
          </div>
        </div>
      </MobileView>

      {/* <img src="/public/images/coffee1.jpg"></img> */}
    </>
  );
}

export default App;
