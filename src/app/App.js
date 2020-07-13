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

  // Nav State
  const [webAppsOpen, setWebAppsOpen] = useState(false);
  const [frontEndCompsOpen, setFrontEndCompsOpen] = useState(false);
  const [demonstrationsOpen, setDemonstrationsOpen] = useState(false);

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
        {isBrowser ? "Desktop Browser" : "Mobile Browser"}
      </div>
      {/* DESKTOP BROWSER */}

      <>
        <div
          className="portfolio"
          style={{ minWidth: browserDesktop ? "400px" : undefined }}
        >
          <div className="portfolio-name">Yuri Dubler /&nbsp;</div>
          <div className="portfolio-text">Portfolio</div>
        </div>
        <div
          className="main-content"
          style={{
            width: browserMobile ? pageWidth - 46 : contentWidth,
            minWidth: browserMobile ? "0px" : "400px",
            //backgroundColor: webAppsOpen ? "rgb(219, 219, 206)" : "ivory",
            borderColor: webAppsOpen ? "black" : "darkgray",
          }}
        >
          <div
            className="main-content-title"
            onClick={() => {
              setWebAppsOpen(!webAppsOpen);
            }}
          >
            Web Apps
          </div>
          {webAppsOpen && (
            <>
              <div className="main-content-item">
                <div className="main-content-item-br"></div>
                <div className="main-content-item-title">Game-Stats</div>
                <br />
                <div className="main-content-item-techstack">REACT</div>
                <div className="main-content-item-techstack">NODE</div>
                <div className="main-content-item-techstack">EXPRESS</div>
                <div className="main-content-item-techstack">POSTGRESQL</div>
                <div className="main-content-item-cloud">HEROKU</div>
                <br />
                <div className="main-content-item-feature">RESPONSIVE</div>
                <div className="main-content-item-feature">SVG ANIMATIONS</div>
                <div className="main-content-item-feature">LOGIN SYSTEM</div>
                <div className="main-content-item-feature">
                  DATA VISUALIZATION
                </div>
                <div className="main-content-item-descr">
                  This web-application uses SVG to visualize numerous statistics
                  associated with my board game group. The data driving the
                  statistics (stored in a PostgreSQL database) includes: meeting
                  dates, players in attendance, choice of game, game winners,
                  and descriptions.
                </div>
              </div>
              <div className="main-content-item-br"></div>
              <div className="main-content-item">
                <div className="main-content-item-title">Mock Website</div>
                <br />
                <div className="main-content-item-techstack">REACT</div>
                <div className="main-content-item-techstack">NODE</div>
                <div className="main-content-item-techstack">EXPRESS</div>
                <div className="main-content-item-techstack">POSTGRESQL</div>
                <div className="main-content-item-cloud">HEROKU</div>
                <div className="main-content-item-descr">
                  This responsive web-application features a login system, user
                  sessions, and profile page.
                </div>
              </div>
              <div className="main-content-item-br"></div>
            </>
          )}
        </div>
        <div
          className="main-content"
          style={{
            width: browserMobile ? pageWidth - 46 : contentWidth,
            minWidth: browserMobile ? "0px" : "400px",
            backgroundColor: frontEndCompsOpen ? "rgb(219, 219, 206)" : "ivory",
            borderColor: frontEndCompsOpen ? "black" : "darkgray",
          }}
        >
          <div
            className="main-content-title"
            onClick={() => {
              setFrontEndCompsOpen(!frontEndCompsOpen);
            }}
          >
            Front End Components
          </div>
          {frontEndCompsOpen && (
            <>
              <div className="main-content-item-br"></div>
              <div className="main-content-item">
                <div className="main-content-item-title">Navbar</div>
                <br />
                <div className="main-content-item-techstack">REACT</div>
                <div className="main-content-item-techstack">SVG</div>
                <br />
                <div className="main-content-item-feature">RESPONSIVE</div>
                <div className="main-content-item-descr">
                  This NavBar has been crafted to attract and engages users with
                  SVG animations.
                </div>
              </div>
              <div className="main-content-item-br"></div>
              <div className="main-content-item">
                <div className="main-content-item-title">
                  Collapsing Sidebar
                </div>
                <br />
                <div className="main-content-item-techstack">REACT</div>
                <br />
                <div className="main-content-item-feature">RECURSIVE</div>
                <div className="main-content-item-descr">
                  This collapsing Sidebar populates a dynamic list recursively.
                </div>
              </div>
              <div className="main-content-item-br"></div>
            </>
          )}
        </div>

        <div
          className="main-content"
          style={{
            width: browserMobile ? pageWidth - 46 : contentWidth,
            minWidth: browserMobile ? "0px" : "400px",
            backgroundColor: demonstrationsOpen
              ? "rgb(219, 219, 206)"
              : "ivory",
            borderColor: demonstrationsOpen ? "black" : "darkgray",
          }}
        >
          <div
            className="main-content-title"
            onClick={() => {
              setDemonstrationsOpen(!demonstrationsOpen);
            }}
          >
            Demonstrations
          </div>
          {demonstrationsOpen && (
            <>
              <div className="main-content-item-br"></div>
              <div className="main-content-item">
                <div className="main-content-item-title">Filters</div>
                <br />
                <div className="main-content-item-techstack">REACT</div>
                <div className="main-content-item-techstack">SVG</div>
                <br />
                <div className="main-content-item-feature">RESPONSIVE</div>
                <div className="main-content-item-feature">IMAGE ANALYSIS</div>
                <br />
                <div className="main-content-item-descr">
                  This mini-app allows the user to define a filter in order to
                  analyze images for patterns.
                </div>
              </div>
              <div className="main-content-item-br"></div>
              <div className="main-content-item">
                <div className="main-content-item-title">Shortest Paths</div>
                <br />
                <div className="main-content-item-techstack">REACT</div>
                <div className="main-content-item-techstack">SVG</div>
                <br />
                <div className="main-content-item-feature">RESPONSIVE</div>
                <div className="main-content-item-feature">
                  GRAPH ALGORITHMS
                </div>
                <br />
                <div className="main-content-item-descr">
                  This mini-app allows the user to define a graph and apply a
                  pathing algorithm to said path.
                </div>
              </div>
              <div className="main-content-item-br"></div>
            </>
          )}
        </div>
      </>

      {/* MOBILE BROWSER */}
      {/* {browserMobile && (
        <>
          <div className="portfolio">
            <div className="portfolio-name">Yuri Dubler /&nbsp;</div>
            <div className="portfolio-text">Portfolio</div>
          </div>
          <div
            className="main-content"
            style={{
              width: pageWidth - 46,
              fontWeight: webAppsOpen ? "bold" : undefined,
              backgroundColor: webAppsOpen ? "rgb(219, 219, 206)" : "ivory",
              borderColor: webAppsOpen ? "black" : "darkgray",
            }}
          >
            <div
              className="main-content-title"
              onClick={() => {
                setWebAppsOpen(!webAppsOpen);
              }}
            >
              Web Apps
            </div>
            {webAppsOpen && (
              <>
                <div className="main-content-item">
                  <div className="main-content-item-br"></div>
                  <div className="main-content-item-title">Game-Stats</div>
                  <br />
                  <div className="main-content-item-techstack">REACT</div>
                  <div className="main-content-item-techstack">NODE</div>
                  <div className="main-content-item-techstack">EXPRESS</div>
                  <div className="main-content-item-techstack">POSTGRESQL</div>
                  <br />
                  <div className="main-content-item-feature">RESPONSIVE</div>
                  <div className="main-content-item-feature">SVG</div>
                  <div className="main-content-item-feature">DATA VIS</div>
                  <div className="main-content-item-feature">
                    ADMIN CONTROLS
                  </div>
                  <div className="main-content-item-descr">
                    This web-application uses SVG to visualize numerous
                    statistics associated with my board game group. The data
                    driving the statistics (stored in a PostgreSQL database)
                    includes: meeting dates, players in attendance, choice of
                    game, game winners, and descriptions.
                  </div>
                </div>
                <div className="main-content-item-br"></div>
                <div className="main-content-item">
                  <div className="main-content-item-title">Mock Website</div>
                  <br />
                  <div className="main-content-item-techstack">REACT</div>
                  <div className="main-content-item-techstack">NODE</div>
                  <div className="main-content-item-techstack">EXPRESS</div>
                  <div className="main-content-item-techstack">POSTGRESQL</div>
                  <br />
                  <div className="main-content-item-feature">RESPONSIVE</div>
                  <div className="main-content-item-feature">LOGIN SYSTEM</div>
                  <div className="main-content-item-feature">USER SESSIONS</div>
                  <div className="main-content-item-feature">PROFILE</div>
                  <div className="main-content-item-descr">
                    This responsive web-application features a login system,
                    user sessions, and profile page.
                  </div>
                </div>
                <div className="main-content-item-br"></div>
              </>
            )}
          </div>
          <div
            className="main-content"
            style={{
              width: pageWidth - 46,
              fontWeight: frontEndCompsOpen ? "bold" : undefined,
              backgroundColor: frontEndCompsOpen
                ? "rgb(219, 219, 206)"
                : "ivory",
              borderColor: frontEndCompsOpen ? "black" : "darkgray",
            }}
          >
            <div
              className="main-content-title"
              onClick={() => {
                setFrontEndCompsOpen(!frontEndCompsOpen);
              }}
            >
              Front End Components
            </div>
            {frontEndCompsOpen && (
              <>
                <div className="main-content-item-br"></div>
                <div className="main-content-item">
                  <div className="main-content-item-title">Navbar</div>
                  <br />
                  <div className="main-content-item-techstack">REACT</div>
                  <div className="main-content-item-techstack">SVG</div>
                  <br />
                  <div className="main-content-item-feature">RESPONSIVE</div>
                  <div className="main-content-item-feature">ANIMATED</div>
                  <div className="main-content-item-descr">
                    This NavBar has been crafted to attract and engage users
                    with smooth and polished SVG animations.
                  </div>
                </div>
                <div className="main-content-item-br"></div>
                <div className="main-content-item">
                  <div className="main-content-item-title">
                    Collapsing Sidebar
                  </div>
                  <br />
                  <div className="main-content-item-techstack">REACT</div>
                  <br />
                  <div className="main-content-item-feature">RECURSIVE</div>
                  <div className="main-content-item-descr">
                    This collapsing Sidebar populates a dynamic list
                    recursively.
                  </div>
                </div>
                <div className="main-content-item-br"></div>
              </>
            )}
          </div>
        </>
      )} */}

      {/* <img src="/public/images/coffee1.jpg"></img> */}
    </>
  );
}

export default App;
