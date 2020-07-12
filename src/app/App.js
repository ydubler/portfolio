import React, { useState, useEffect } from "react";
import {
  isMobile,
  isBrowser,
  BrowserView,
  MobileView,
  isSafari,
  isIOS,
  isMobileSafari,
} from "react-device-detect";

import "../../public/css/App.css"; // CSS
import "../../public/css/Fonts.css"; // CSS Fonts

function App() {
  // State
  const [browserMobile, setBrowserMobile] = useState(false);
  const [browserDesktop, setBrowserDesktop] = useState(false);
  const [pageWidth, setPageWidth] = useState(0);
  const [windowInnerWidth, setWindowInnerWidth] = useState(0);
  const [contentWidthMax, setContentWidthMax] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    determineBrowserType();
    getWindowWidth();
    getContentWidthMax();
    getContentWidth();

    window.onorientationchange = function (event) {
      getContentWidth();
    };

    window.onresize = function (event) {
      getContentWidth();
    };
  });

  function getWindowWidth() {
    const windowWidth = window.innerWidth;
    setWindowInnerWidth(windowWidth);
  }

  function determineBrowserType() {
    if (isMobile) {
      setBrowserMobile(true);
    } else {
      setBrowserDesktop(true);
    }
  }

  function getContentWidthMax() {
    let contentWidthMax = 0;

    if (isBrowser) {
      contentWidthMax = 0.7 * window.screen.width;
    } else {
      if (isMobile && isSafari) {
        //contentWidthMax = window.screen.availWidth - 46;
        contentWidthMax = document.body.clientWidth - 46;
      } else {
        contentWidthMax = window.innerWidth - 46;
      }
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
      if (isMobile && isSafari) {
        //contentWidth = window.screen.availWidth - 46;

        contentWidth = document.body.clientWidth - 46;
      } else {
        contentWidth = window.innerWidth - 46;
      }
    }

    setContentWidth(contentWidth);
  }

  function getWindowWidth() {
    const pageWidth = document.getElementById("page-width").offsetWidth;
    setPageWidth(pageWidth);
  }

  return (
    <>
      <div id="page-width" className="one-hundred">
        {pageWidth}
      </div>
      {/* DESKTOP BROWSER */}
      {browserDesktop && (
        <>
          <div
            className="portfolio"
            style={{ minWidth: isBrowser ? "400px" : undefined }}
          >
            <div className="portfolio-name">Yuri Dubler /&nbsp;</div>
            <div className="portfolio-text">Portfolio</div>
          </div>
          <div
            className="main-content"
            style={{
              width: contentWidth,
              minWidth: isBrowser ? "400px" : undefined,
            }}
          >
            <div className="main-content-title">Web Apps</div>
            <div className="main-content-item">
              <div className="main-content-webapp-title">GameStats</div>
              <div className="main-content-webapp-techstack">REACT</div>
              <div className="main-content-webapp-techstack">NODE</div>
              <div className="main-content-webapp-techstack">EXPRESS</div>
              <div className="main-content-webapp-techstack">POSTGRESQL</div>
              <div className="main-content-webapp-feature">RESPONSIVE</div>
              <div className="main-content-webapp-descr">
                This web-application features...
              </div>
            </div>
            <div className="main-content-item">
              <div className="main-content-webapp-title">GameStats</div>
              <div className="main-content-webapp-techstack">REACT</div>
              <div className="main-content-webapp-techstack">NODE</div>
              <div className="main-content-webapp-techstack">EXPRESS</div>
              <div className="main-content-webapp-techstack">POSTGRESQL</div>
              <div className="main-content-webapp-feature">RESPONSIVE</div>
              <div className="main-content-webapp-descr">
                This web-application features...
              </div>
            </div>
          </div>
          <div
            className="main-content"
            style={{
              width: contentWidth,
              minWidth: isBrowser ? "400px" : undefined,
            }}
          >
            <div className="main-content-title">Front End</div>
            <div className="main-content-item">
              <div className="main-content-webapp-title">Navbar</div>
              <div className="main-content-webapp-techstack">REACT</div>
              <div className="main-content-webapp-techstack">SVG</div>
              <div className="main-content-webapp-feature">RESPONSIVE</div>
              <div className="main-content-webapp-feature">ANIMATED</div>
              <div className="main-content-webapp-descr">
                This NavBar has been carefully crafted to be eye candy.
              </div>
            </div>
          </div>
        </>
      )}

      {/* MOBILE BROWSER */}
      {browserMobile && (
        <>
          <div className="portfolio">
            <div className="portfolio-name">Yuri Dubler /&nbsp;</div>
            <div className="portfolio-text">Portfolio</div>
          </div>
          <div
            className="main-content-mobile"
            style={{ width: pageWidth - 46 }}
          >
            <div className="main-content-title">Web Apps</div>
            <div className="main-content-item">
              <div className="main-content-webapp-title">GameStats</div>
              <div className="main-content-webapp-techstack">REACT</div>
              <div className="main-content-webapp-techstack">NODE</div>
              <div className="main-content-webapp-techstack">EXPRESS</div>
              <div className="main-content-webapp-techstack">POSTGRESQL</div>
              <div className="main-content-webapp-feature">RESPONSIVE</div>
              <div className="main-content-webapp-descr">
                This web-application features...
              </div>
            </div>
            <div className="main-content-item">
              <div className="main-content-webapp-title">GameStats</div>
              <div className="main-content-webapp-techstack">REACT</div>
              <div className="main-content-webapp-techstack">NODE</div>
              <div className="main-content-webapp-techstack">EXPRESS</div>
              <div className="main-content-webapp-techstack">POSTGRESQL</div>
              <div className="main-content-webapp-feature">RESPONSIVE</div>
              <div className="main-content-webapp-descr">
                This web-application features...
              </div>
            </div>
          </div>
        </>
      )}

      {/* <img src="/public/images/coffee1.jpg"></img> */}
    </>
  );
}

export default App;
