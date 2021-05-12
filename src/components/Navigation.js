import React, { useContext } from "react";
import "../styles/Navigation.css";
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Context} from "./Context"

const Navigation = () => {
const {cartItems} = useContext(Context)
    
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
            <Link  exact to="/cart" id="basket-link" style={{ textDecoration: 'none' }} className="navbar-item">
        <FontAwesomeIcon color="white" icon={faShoppingCart} size="lg"/>
        <span color="white" id="cart-item-count">{cartItems.length}</span>
      </Link>
            
      </ul>
    </nav>
  );
};

export default Navigation;
