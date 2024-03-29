import React from "react";
import AnnouncementComponent from "../component/AnnouncementComponent";
import NavigationComponent from "../component/NavigationComponent";
import SliderComponent from "../component/SliderComponent";
import CategoriesComponent from "../component/CategoriesComponent";
import ProductsComponent from "../component/ProductsComponent";
import NewsletterComponent from "../component/NewsletterComponent";
import FooterComponent from "../component/FooterComponent";

/**
 * HomePageComponent
 */
class HomePageComponent extends React.Component
{
  /**
   * render
   * @returns {JSX.Element}
   */
  render()
  {
    return(
      <>
        <AnnouncementComponent/>
        <NavigationComponent/>
        <SliderComponent/>
        <CategoriesComponent/>
        <ProductsComponent/>
        <NewsletterComponent/>
        <FooterComponent/>
      </>
    )
  }
}

export default HomePageComponent;