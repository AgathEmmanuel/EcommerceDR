import './App.css';
import Header from './Header';
import Checkout from "./Checkout";
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  
  return (
    <div className="app">
      {/* following the BEM naming convention */}
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
       </div>
      </Router>

   </div>
  );
}

export default App;
