import React, { Component, Fragment } from "react";
class Header extends Component {
  state = {};
  render() {
    return (
      <header className="top">
        <h1>
          React
          <span className="ofThe">
            <span className="of">For </span>
            <span className="the">The </span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>Fresh Daily</span>
        </h3>
      </header>
    );
  }
}

export default Header;
