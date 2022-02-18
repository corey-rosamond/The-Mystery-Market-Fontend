import React from "react";

import AnnouncementComponent from "../component/AnnouncementComponent";
import NavigationComponent from "../component/NavigationComponent";
import SliderComponent from "../component/SliderComponent";


class HomePageComponent extends React.Component
{

  render()
  {
    return(
      <>
        <AnnouncementComponent/>
        <NavigationComponent/>
        <SliderComponent/>
      </>
    )
  }
}

export default HomePageComponent;