import React from "react";



import HeaderComponent from "./component/HeaderComponent";
import NavigationComponent from "./component/NavigationComponent";
import FooterComponent from "./component/FooterComponent";

/**
 * App
 *
 * This is the main application class
 */
class App extends React.Component
{



  render()
  {
    return (
      <div className="App">
        <HeaderComponent />
        <NavigationComponent />

        <FooterComponent />
      </div>
    );
  }
}

export default App;