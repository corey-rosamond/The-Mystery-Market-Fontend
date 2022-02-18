import React from "react";

import HomePageComponent from "./page/HomePageComponent";

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
      <HomePageComponent />
    );
  }
}

// Export App
export default App;