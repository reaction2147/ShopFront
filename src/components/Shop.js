import React from "react";
import "../styles/Shop.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import { withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


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

  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 2,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

  return (
    <div>
      <h1 className="shop-menu">Shop</h1>
      <div className="cards-container">
        {items.map((item) => (
        
            <div key={item.id} className="card-container">
               <Link to={`/shop/${item.id}`}> <img
                alt={item.name}
                className="item-image"
                src={item.images.icon}
                
              /></Link>
              <Link to={`/shop/${item.id}`}><p className="item-name">{item.name}</p></Link>
            </div>
         
        ))}
      </div>
    </div>
  );
};

export default Shop;
