import React from "react";
import styled from "styled-components";
import {
  Link
} from "react-router-dom";

/**
 * This is a list of styled components used to create the category item component.
 * Once the project is further along I would like to move these to some other file and
 * convert them to more of themed items for site wide use rather than items that only
 * apply to the Category Item.
 */
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 40vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Information = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${(props) => props.color};
  margin: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 600;
`;

/**
 * CategoryItemComponent
 */
class CategoryItemComponent extends React.Component
{
  /**
   * constructor
   * @param props
   */
  constructor(props)
  {
    super(props);
    this.state = {
      title: props.title,
      description: props.description,
      color: props.color,
      uri: props.uri,
      image: props.image
    };
  }

  /**
   * render
   * @returns {JSX.Element}
   */
  render()
  {
    let {
      image,
      title,
      uri,
      color
    } = this.state;
    return (
      <Container>
        <Image src={image} />
        <Information>
          <Title color={color}>{title}</Title>
          <Link to={`/products/${uri}`}>
            <Button>Shop Now</Button>
          </Link>
        </Information>
      </Container>
    );
  }
}

export default CategoryItemComponent;