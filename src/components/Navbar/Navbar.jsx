import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-parent">
      <img src="images/logo.png" />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/Lore"> Lore </Link>
        <Link to="/StockStuff"> Stock Footage </Link>
        <Link to="/NFTs"> NFTs </Link>
        <Link to="/TheTeam"> The Team </Link>
        <Link to="/making-of"> The Making Of </Link>
      </nav>
    </div>
  );
}

export default Navbar;
