import "./styles/App.css";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
