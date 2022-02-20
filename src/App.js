import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

// These are all the different page components we have in the site
import HomePageComponent from "./page/HomePageComponent";
import ProductListPageComponent from "./page/ProductListPageComponent";
import ProductPageComponent from "./page/ProductPageComponent";
import CartPageComponent from "./page/CartPageComponent";
import LoginPageComponent from "./page/LoginPageComponent";
import RegisterPageComponent from "./page/RegisterPageComponent";


/**
 * App
 *
 * This is the main application class
 */
class App extends React.Component
{
  /**
   * render
   *
   * Basic render method called by react.
   * @returns {JSX.Element}
   */
  render()
  {
    // Dummy var for testing
    const user = true;
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePageComponent />
          </Route>
          <Route path="/products/:category">
            <ProductListPageComponent/>
          </Route>
          <Route path="/product/:id">
            <ProductPageComponent/>
          </Route>
          <Route path="/cart">
            <CartPageComponent/>
          </Route>
          <Route path="/login">
            {
              user ?
                <Redirect to="/"/>:<LoginPageComponent/>
            }
            <LoginPageComponent/>
          </Route>
          <Route path="/register">
            {
              user ?
                <Redirect to="/"/>:<RegisterPageComponent/>
            }
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;