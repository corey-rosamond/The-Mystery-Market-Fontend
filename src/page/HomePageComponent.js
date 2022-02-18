import React from "react";

import AnnouncementComponent from "../component/AnnouncementComponent";
import NavigationComponent from "../component/NavigationComponent";

class HomePageComponent extends React.Component
{

  render()
  {
    return(
      <>
        <AnnouncementComponent/>
        <NavigationComponent/>
      </>
    )
  }
}

export default HomePageComponent;