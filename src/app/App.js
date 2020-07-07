import React, { useState } from "react";
import "../../public/css/App.css";

function App() {
  // State
  const [greeting, setGreeting] = useState("Hello Function Component!");

  return (
    <>
      <img src="/public/images/coffee1.jpg"></img>
      <div className="one font-lobster">{greeting}</div>
    </>
  );
}

export default App;
