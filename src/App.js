import React from "react";



import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";

/**
 * App
 *
 * This is the main application class
 */
class App extends React.Component
{
  /**
   * constructor
   *
   * Constructs all the state vars.
   * @param props
   */
  constructor(props)
  {
    super(props);
    this.state = {
      isLoggedIn: false,
      copyYear: "2022",
      companyName: "Binary Solutions LLC"
    };
    // Will need to add token authentication.
    let authenticationToken = localStorage.getItem('authentication_token');
    if(authenticationToken !== null)
    {
      this.setState({isLoggedIn: true});
    }

  }

  /**
   * render
   *
   * Basic render method called by react.
   * @returns {JSX.Element}
   */
  render()
  {
    return (
      <div className="App">
        <HeaderComponent isLoggedIn={this.state.isLoggedIn}/>

        <FooterComponent
          copyYear={this.state.copyYear}
          companyName={this.state.companyName}
        />
      </div>
    );
  }
}

// Export App
export default App;