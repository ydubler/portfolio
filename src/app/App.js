import React, { useState } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import BrowserApp from "./browser/BrowserApp";
import MobileApp from "./mobile/MobileApp";

function App() {
  // State
  const [greeting, setGreeting] = useState("Hello Function Component!");

  return (
    <>
      <BrowserView>
        <BrowserApp />
      </BrowserView>

      <MobileView>
        <MobileApp />
      </MobileView>
    </>
  );
}

export default App;
