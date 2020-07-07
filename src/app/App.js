import React, { useState } from "react";
import "../../public/css/App.css";

function App() {
  // State
  const [greeting, setGreeting] = useState("Hello Function Component!");

  return (
    <>
      <div className="portfolio">
        <div class="portfolio-text">Portfolio</div>
      </div>
      <img src="/public/images/coffee1.jpg"></img>
      <div className="one font-lobster">{greeting}</div>
    </>
  );
}

export default App;
