import React, { useState, useEffect } from "react";

import "../styles/itemDetail.css"



const ItemDetail = ({match}) => {
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

  
    
  return  (
    <div className="item-detail">
      <h1>{item.name}</h1>
      <h3>{item.description}</h3>
      <img className="item-detail-image" alt="" src={item.images.icon} />
      <button id="add-to-cart-button"  >
              Add to Cart
            </button>
    </div>
  ) 
};

export default ItemDetail;
