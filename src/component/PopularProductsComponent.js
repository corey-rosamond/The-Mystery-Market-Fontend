import React from "react";
import axios from "axios";
import styled from "styled-components";
import PopularProductComponent from "./PopularProductComponent";
import {PopularProducts} from "../data/PopularProducts";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

/**
 * PopularProductsComponent
 */
class PopularProductsComponent extends React.Component
{
  /**
   * constructor
   * @param props
   */
  constructor(props)
  {
    super(props);
    this.state = {
      products: PopularProducts
    };
  }

  /**
   * Get Products
   *
   * This method will get the products and update the products state var.
   * @returns boolean
   */
  async getProducts()
  {
    try
    {
      let {data} = await axios.get("http://localhost:5000/api/products/get");
      if(data.success)
      {
        this.setState({products: data.data});
        return true;
      }
      this.setState({products: []});
      return false;
    } catch (error)
    {
      console.log(error.message)
      return false;
    }
  }

  /**
   * render
   *
   * Render will be called by react.
   * @returns {JSX.Element}
   */
  render()
  {
    return (
      <Container>
        {this.state.products.map(product => {
          return (
            <PopularProductComponent key={product._id} data={product}/>
          );
        })}
      </Container>
    );
  }
}

export default PopularProductsComponent;