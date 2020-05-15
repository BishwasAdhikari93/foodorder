import React, { Component } from "react";
import ReactDOM from "react-dom";

class StorePicker extends Component {
  //state = {  }
  render() {
    return (
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store name" />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
