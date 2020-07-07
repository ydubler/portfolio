import React, { useState } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import BrowserApp from "./browser/BrowserApp";

function App() {
  // State
  const [greeting, setGreeting] = useState("Hello Function Component!");

  return (
    <>
      <BrowserView>
        <BrowserApp />
      </BrowserView>
      <MobileView>
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
