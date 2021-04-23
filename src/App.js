import "./styles/App.css";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
