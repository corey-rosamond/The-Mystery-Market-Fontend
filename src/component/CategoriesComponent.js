import React from "react";
import styled from "styled-components";
import axios from "axios";
import CategoryItemComponent from "./CategoryItemComponent";


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
      categories: []
    };
  }

  /**
   * Component Did Mount
   *
   * This will call the method that populates the category list once the component has mounted.
   */
  componentDidMount()
  {
    this.getCategoryList();
  }

  /**
   * Get Category List.
   */
  getCategoryList()
  {
    try
    {
      axios.get(
        "http://localhost:5000/api/category/getAll"
      ).then((response) => {
          let data = response.data;
          if(data.success)
          {
            this.setState({
              categories: data.categories
            });
            return true;
          }
          return false;
        }
      );
    } catch (error)
    {
      // @todo remove before production.
      console.log(error);
    }
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
          return (
            <CategoryItemComponent
              key={category._id}
              title={category.title}
              description={category.description}
              color={category.color}
              uri={category.uri}
              image={category.image}
              data={category}/>
          );
        })};
      </Container>
    );
  }
}

export default CategoriesComponent;