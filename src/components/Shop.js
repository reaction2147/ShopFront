import React from "react";
import "../styles/Shop.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  //code to fetch the data from the API

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v2/cosmetics/br/new", {
      mode: "cors",
    });
    const items = await data.json();
    console.log(items.data.items);
    setItems(items.data.items);
  };

  // Run function on mount

  useEffect(() => {
    fetchItems();
  }, []);

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
