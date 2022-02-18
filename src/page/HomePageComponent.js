import React from "react";

import AnnouncementComponent from "../component/AnnouncementComponent";
import NavigationComponent from "../component/NavigationComponent";
import SliderComponent from "../component/SliderComponent";
import CategoriesComponent from "../component/CategoriesComponent";


class HomePageComponent extends React.Component
{

  render()
  {
    return(
      <>
        <AnnouncementComponent/>
        <NavigationComponent/>
        <SliderComponent/>
        <CategoriesComponent/>
      </>
    )
  }
}

export default HomePageComponent;