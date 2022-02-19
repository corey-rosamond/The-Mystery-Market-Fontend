import React from "react";

import AnnouncementComponent from "../component/AnnouncementComponent";
import NavigationComponent from "../component/NavigationComponent";
import SliderComponent from "../component/SliderComponent";
import CategoriesComponent from "../component/CategoriesComponent";
import PopularProductsComponent from "../component/PopularProductsComponent";
import NewsletterComponent from "../component/NewsletterComponent";


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
        <PopularProductsComponent/>
        <NewsletterComponent/>
      </>
    )
  }
}

export default HomePageComponent;