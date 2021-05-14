import React from "react";
import "../styles/Shop.css";
import {useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "./Context"

const Shop = () => {
 
  const {items} = useContext(Context)

  return (
    <div>
      <h1 className="shop-menu">Shop</h1>
      <div className="cards-container">
        {items.map((item) => (
          <div key={item.id} className="card-container">
            <Link to={`/shop/${item.id}`}>
              <img
                alt={item.name}
                className="item-image"
                src={item.images.icon}
              />
            </Link>
            <Link style={{ textDecoration: "none" }} to={`/shop/${item.id}`}>
              <p className="item-name">{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
