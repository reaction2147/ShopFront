import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    //code to fetch the data from the API
    const [cartItems, setCartItems] = useState([])
    console.log(cartItems.length)

    function addToCart() {
        setCartItems(prevItems => prevItems += 1 )
        
    }

  return (
      <Context.Provider value={{cartItems, addToCart}}>
          {children}
      </Context.Provider>
  )
}

export {ContextProvider, Context}