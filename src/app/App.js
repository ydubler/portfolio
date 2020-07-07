import React, { useState } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import "../../public/css/App.css"; // CSS

function App() {
  // State
  const [greeting, setGreeting] = useState("Hello Function Component!");

  return (
    <>
      <BrowserView>
        <div className="portfolio">
          <div class="portfolio-text">Portfolio</div>
        </div>
        <div className="navbar">
          <div class="navbar-option-browser">WEB APPLICATIONS</div>
          <div class="navbar-option-browser">COMPONENTS</div>
        </div>
        {/* <img src="/public/images/coffee1.jpg"></img> */}
        <div className="one font-lobster">{greeting}</div>
      </BrowserView>
      <MobileView>
        <div className="portfolio">
          <div class="portfolio-text">Portfolio</div>
        </div>
        <div className="navbar">
          <div class="navbar-option-mobile">WEB APPLICATIONS</div>
          <div class="navbar-option-mobile">COMPONENTS</div>
        </div>
        {/* <img src="/public/images/coffee1.jpg"></img> */}
        <div className="one font-lobster">{greeting}</div>
      </MobileView>
    </>
  );
}

export default App;
