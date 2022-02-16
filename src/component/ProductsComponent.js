import React from "react";
import axios from "axios";
import SmallProductCardComponent from "./SmallProductCardComponent";

/**
 * ProductsComponent
 *
 * This is the component that will output the full product list.
 */
class ProductsComponent extends React.Component
{
  /**
   * constructor
   *
   * basic constructor
   * @param props
   */
  constructor(props)
  {
    super(props);
    this.state = {
      filters: [],
      products: []
    };
    this.getProducts();
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
      <div>
        {this.state.products.map(product => {
          return <SmallProductCardComponent key={product._id} productData={product}/>;
        })}
      </div>
    );
  }
}

// Export the ProductsComponent.
export default ProductsComponent;