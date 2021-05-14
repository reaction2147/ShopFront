import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
   //code to fetch the data from the API

   const [items, setItems] = useState([]);

   const fetchItems = async () => {
     const data = await fetch("https://fortnite-api.com/v2/cosmetics/br/new", {
       mode: "cors",
     });
     const items = await data.json();
     setItems(items.data.items);
   };
 
   // Run function on mount
 
   useEffect(() => {
     fetchItems();
   }, []);

//Item Detail fetch and match params

// Add to cart function

    const [cartItems, setCartItems] = useState([])
    

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem]) 
    }

    function emptyCart() {
        setCartItems([])
    }

  return (
      <Context.Provider value={{cartItems, addToCart, items, emptyCart}}>
          {children}
      </Context.Provider>
  )
}

export {ContextProvider, Context}