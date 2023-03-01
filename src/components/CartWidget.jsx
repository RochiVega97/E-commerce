import React, { Component } from 'react';
import { BsFillCartCheckFill } from "react-icons/bs";

class CartWidget extends Component {
  render() {
    return (
      <a href="#" className="flex">
        <BsFillCartCheckFill color="primary" fontSize="large"></BsFillCartCheckFill>
        <h4 style={{ color: "white" }}>3</h4>
      </a>

    )
  }
}

export default CartWidget;
