import React from "react";
import {
  Card,
  Button
} from "react-bootstrap";

class SmallProductCardComponent extends React.Component
{
  titleMaxLength = 50;
  descriptionMaxLength = 150;
  constructor(props)
  {
    super(props);
  }

  render()
  {
    let {
      _id,
      name,
      description,
      purchased_at,
      sell_at,
      selling_at,
      retail_link,
      stock_quantity,
      photo_1,
      photo_2,
      photo_3,
      photo_4,
      photo_5,
      photo_6,
      date_added,
      date_updated
    } = this.props.productData;

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={photo_1} />
        <Card.Body>
          <Card.Title>
            {
              name.length > this.titleMaxLength ?
                `${name.substring(0, this.titleMaxLength)}...`
                :
                name
            }
          </Card.Title>
          <Card.Text>
            {
              description.length > this.descriptionMaxLength ?
                `${description.substring(0, this.descriptionMaxLength)}...`
                :
                description
            }
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SmallProductCardComponent;