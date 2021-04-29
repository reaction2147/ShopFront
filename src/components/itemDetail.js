import React, { useState, useEffect } from "react";
import "../styles/itemDetail.css"


const ItemDetail = ({ match },{onAddToCart}) => {
  useEffect(() => {
    fetchItem();
  }, );

  const [item, setItem] = useState({
    images: {}
  });
  

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/${match.params.id}`,{mode: "cors",}
    );
    const item = await fetchItem.json();
    setItem(item.data);
    
  };

  //On add to cart
  const [quantity, setQuantity] = useState(1)

  function changeQuantity(event) {
    setQuantity(event.target.value)
  }
    
  return  (
    <div className="item-detail">
      <h1>{item.name}</h1>
      <h3>{item.description}</h3>
      <img className="item-detail-image" alt="" src={item.images.icon} />
      <span id="item-quantity-label">QTY</span>
        <input id="item-quantity-input" type="number" value={quantity} onChange={changeQuantity} min={1} max={10}/>

        <button 
          id="add-to-cart-button" 
          onClick={() => { onAddToCart(parseInt(quantity))}}
        >
          Add to Cart
        </button>
    </div>
  ) 
};

export default ItemDetail;
