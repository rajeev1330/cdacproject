import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import ShopHooks from "./pages/shopHooks";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Register from "./pages/register";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/shopHooks" component={ShopHooks} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
