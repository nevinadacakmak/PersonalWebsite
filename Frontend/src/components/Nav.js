import React from "react";

function Nav({ setActiveSection }) {
  return (
    <div id="nav-buttons">
      <button onClick={() => setActiveSection("professional")}>
        PROFESSIONAL
      </button>
      <button onClick={() => setActiveSection("personal")}>PERSONAL</button>
    </div>
  );
}

export default Nav;
