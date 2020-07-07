import React, { useState } from "react";

import "../../../public/css/BrowserApp.css"; // CSS

function BrowserApp() {
  // State
  const [greeting, setGreeting] = useState("Hello Function Component!");

  return (
    <>
      <div className="portfolio">
        <div class="portfolio-text">Portfolio</div>
      </div>
      <div className="navbar">
        <div class="navbar-option">WEB APPLICATIONS</div>
        <div class="navbar-option">COMPONENTS</div>
      </div>
      {/* <img src="/public/images/coffee1.jpg"></img> */}
      <div className="one font-lobster">{greeting}</div>
    </>
  );
}

export default BrowserApp;
