import React from "react";
import styled from "styled-components";

const Container = styled.div`

`;

const Image = styled.img`

`;

const Information = styled.div`

`;

const Title = styled.h1`

`;

const Button = styled.button`

`;

class CategoryItemComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      data: props.data
    };
  }

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