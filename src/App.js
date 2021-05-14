import "./styles/App.css";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import ItemDetail from "./components/itemDetail";
import Cart from "./components/Cart";

function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation  />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route path="/shop/:id" component={ItemDetail}/>
           <Route path="/cart" component={Cart} />
            
           </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;