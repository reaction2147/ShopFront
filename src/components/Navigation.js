import React from "react";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navigation = () => {

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
            <ShoppingCartIcon />
      </ul>
    </nav>
  );
};

export default Navigation;
