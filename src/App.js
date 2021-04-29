import "./styles/App.css";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import React,{useState} from "react"
import ItemDetail  from "./components/itemDetail"


function App() {

const [cart, setCart] = useState(1);

function calculateCartItemCount() {
return cart;
}
  
  return (
    <BrowserRouter>
      <div className="App">
      <Navigation cartItemCount={calculateCartItemCount()}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop"component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
