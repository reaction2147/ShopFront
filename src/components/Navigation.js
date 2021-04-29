import React from "react";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";


const Navigation = (props) => {
   
    
  return (
    <nav className="menu">
      <h3>Logo</h3>
      <ul className="menu-links">
            <Link className="menuStyle" to="/">
                    <li>Home</li>
            </Link>
            <Link className="menuStyle" to="/shop">
                    <li>Shop</li>
            </Link>
            
      </ul>
    </nav>
  );
};

export default Navigation;
