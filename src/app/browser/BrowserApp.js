import React, { useState } from "react";

import "../../../public/css/BrowserApp.css"; // CSS

function BrowserApp() {
  // State
  const [greeting, setGreeting] = useState("Hello Function Component!");

  return (
    <>
      <div className="portfolio-browser">
        <div class="portfolio-text-browser">Portfolio</div>
      </div>
      <div className="navbar-browser">
        <div class="navbar-option-browser">WEB APPLICATIONS</div>
        <div class="navbar-option-browser">COMPONENTS</div>
      </div>
      {/* <img src="/public/images/coffee1.jpg"></img> */}
    </>
  );
}

export default BrowserApp;
