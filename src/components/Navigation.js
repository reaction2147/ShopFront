import React from "react";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {

  const menuStyle = {
    color: "white",
    underline: "none",
  };

  return (
    <nav className="menu">
      <h3>Logo</h3>
      <ul className="menu-links">
            <Link style={menuStyle} to="/">
                    <li>Home</li>
            </Link>
            <Link style={menuStyle} to="/shop">
                    <li>Shop</li>
            </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
