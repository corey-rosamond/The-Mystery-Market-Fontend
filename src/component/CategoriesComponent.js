import React from "react";
import styled from "styled-components";
import CategoryItemComponent from "./CategoryItemComponent";
import {Categories} from "../data/Categories";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

class CategoriesComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      categories: Categories
    };
  }

  render()
  {
    return(
      <Container>
        {this.state.categories.map(category => {
          return (<CategoryItemComponent key={category._id} data={category}/>);
        })};
      </Container>
    );
  }
}

export default CategoriesComponent;