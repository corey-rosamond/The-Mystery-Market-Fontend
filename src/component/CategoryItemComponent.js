import React from "react";
import styled from "styled-components";

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
  color: black;
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
      data: props.data
    };
  }

  /**
   * render
   * @returns {JSX.Element}
   */
  render()
  {

    return (
      <Container>
        <Image src={this.state.data.image} />
        <Information>
          <Title>{this.state.data.title}</Title>
          <Button>Shop Now</Button>
        </Information>
      </Container>
    );
  }
}

export default CategoryItemComponent;