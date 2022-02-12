import React from "react";
import NavigationComponent from "./NavigationComponent";



class HeaderComponent extends React.Component
{
    render()
    {
        return (
          <NavigationComponent
            brandText="The Mystery Market"
            brandDestination="/"
            homeText="Home"
            homeDestination="/home"
            navigationLinks={[["Products", "/products"]]}
          />
        );
    }
}

export default HeaderComponent;