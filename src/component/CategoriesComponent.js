import React from "react";
import styled from "styled-components";
import CategoryItemComponent from "./CategoryItemComponent";
import {Categories} from "../data/Categories";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

/**
 * Categories Component
 */
class CategoriesComponent extends React.Component
{
  /**
   * constructor
   * @param props
   */
  constructor(props)
  {
    super(props);
    this.state = {
      categories: Categories
    };
  }

  /**
   * render
   * @returns {JSX.Element}
   */
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