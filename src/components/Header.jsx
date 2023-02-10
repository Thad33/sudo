import React, { useState } from "react";

function Header() {
    const [showHeader, setShowHeader] = useState(true);
  
    return (
      <div>
        <button onClick={() => setShowHeader(!showHeader)}>
          {showHeader ? "Hide" : "Show"} Header
        </button>
        {showHeader && (
          <h1>This is the header component</h1>
        )}
      </div>
    );
  }
  
  export default Header;