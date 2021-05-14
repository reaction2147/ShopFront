import React, { useContext, useState } from "react";
import { Context } from "./Context";
import "../styles/Cart.css"

const Cart = () => {
  const { cartItems } = useContext(Context);
  const [buttonText, setButtonText] = useState("Place Order");
  const { emptyCart } = useContext(Context);
  const [titleText, setTitleText] = useState("Check Out")
  const totalCost = (5.99 * cartItems.length).toFixed(2)

  const placeorder = () => {
    setButtonText("Ordering");
    setTitleText("Ordering")
    setTimeout(() => {
      setTitleText("Thank you, your order has been placed");
      emptyCart();
      setButtonText("Place Order");
    }, 3000);
  };

  const cartItemElements = cartItems.map((items) => (
    <div className="item-container" key={items.id}>
      <h3>{items.name}</h3>
      <img alt="" src={items.images.icon} width="130px" />
            <p>$5.99</p>
      
    </div>

  ));
  return (
    <div className="cart-page">
      <h1>{titleText}</h1>
      {cartItemElements}
      <h3>Total: £{totalCost} </h3>
      <div className="order-button">
                <button onClick={placeorder}>{buttonText}</button>
            </div>
    </div>
  );
};

export default Cart;
