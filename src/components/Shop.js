import React from "react";
import "../styles/Shop.css";
import {useState, useEffect} from "react"
import Card from "./Card"

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v2/cosmetics/br/new", {mode: 'cors'});
    const items = await data.json()
    console.log(items.data.items);
    setItems(items.data.items)
  };

  return (
      <div>
           <h1 className="shop-menu">Shop</h1>
      <div className="cards-container">
  {items.map(item => (
     <Card 
     src={item.images.icon}
     name={item.name}
     key={item.name}
     />
      
  ))}
  </div>
  </div>
  );
};

export default Shop;
