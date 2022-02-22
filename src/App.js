import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {
  connect
} from "react-redux";


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
    let user = this.props.user.currentUser;
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

/**
 * mapStateToProps
 * @param state
 * @returns {{user: any}}
 */
const mapStateToProps = state => ({
  user: state.user
})

/** Connect and export the default class component. */
export default connect(
  mapStateToProps,
  null
)(App);