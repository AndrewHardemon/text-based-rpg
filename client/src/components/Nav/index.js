import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/"> 
        React Memory Game
      </a>
      <a className="navbar-brand" href="/">
        Login
      </a>
    </nav>
  );
}

export default Nav;