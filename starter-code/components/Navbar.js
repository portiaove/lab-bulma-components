import React from "react";
// import 'bulma/css/bulma.css';

function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <a className="navbar-item" href="/">
          Home
        </a>

        <a  className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"></a>
    
      <div role="button" className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">Log in</a>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
