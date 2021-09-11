import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  const loc = props.location.pathname;
  const determineActive = (path) => {
    return path === loc ? "active" : "";
  };
  return (
    <div className="nav-parent">
      <img src="images/logo.png" />

      <nav>
        <Link className={determineActive("/")} to="/">
          Home
        </Link>
        <Link className={determineActive("/lore")} to="/lore">
          {" "}
          Lore{" "}
        </Link>
        <Link className={determineActive("/stockStuff")} to="/stockStuff">
          {" "}
          Stock Footage{" "}
        </Link>
        <Link className={determineActive("/nfts")} to="/nfts">
          {" "}
          NFTs{" "}
        </Link>
        <Link className={determineActive("/theTeam")} to="/theTeam">
          {" "}
          The Team{" "}
        </Link>
        <Link className={determineActive("/makingOf")} to="/makingOf">
          {" "}
          The Making Of{" "}
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
