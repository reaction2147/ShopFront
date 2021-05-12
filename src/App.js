import "./styles/App.css";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import React, { useState } from "react";
import ItemDetail from "./components/itemDetail";

function App() {
  const [cart, setCart] = useState(5);

  function calculateCartItemCount() {
    return cart;
  }

  //function handleAddToCart() {
    //setCart((prevCount) => prevCount + 1);
  //}
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation cartItemCount={calculateCartItemCount()} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route path="/shop/:id" component={ItemDetail}/>
           
            
           </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;