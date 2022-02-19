import React from "react";

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
    return (
      <HomePageComponent/>
    );
  }
}

// Export App
export default App;