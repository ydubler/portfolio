import React, { useState } from "react";

import "../../../public/css/MobileApp.css"; // CSS

function BrowserApp() {
  // State
  const [greeting, setGreeting] = useState("Hello Function Component!");

  return (
    <>
      <div className="portfolio-mobile">
        <div class="portfolio-text-mobile">Portfolio</div>
      </div>
      <div className="navbar-mobile">
        <div class="navbar-option-mobile">WEB APPLICATIONS</div>
        <div class="navbar-option-mobile">COMPONENTS</div>
      </div>
      {/* <img src="/public/images/coffee1.jpg"></img> */}
    </>
  );
}

export default BrowserApp;
