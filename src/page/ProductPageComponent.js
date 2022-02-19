import React from "react";
import styled from "styled-components";
import AnnouncementComponent from "../component/AnnouncementComponent";
import NavigationComponent from "../component/NavigationComponent";
import NewsletterComponent from "../component/NewsletterComponent";
import FooterComponent from "../component/FooterComponent";

const Container = styled.div`
  
`;

class ProductPageComponent extends React.Component
{

  render()
  {
    return (
      <>
        <AnnouncementComponent/>
        <NavigationComponent/>
        <Container>
          ProductPageComponent
        </Container>
        <NewsletterComponent/>
        <FooterComponent/>
      </>
    );
  }
}

export default ProductPageComponent;