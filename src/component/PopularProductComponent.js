import React from "react";
import styled from "styled-components";
import {ShoppingCartOutlined, SearchOutlined, HeartBrokenOutlined} from "@mui/icons-material";

const Information = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: all 1.0s ease;
  overflow: hidden;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Information}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  max-width: 75%;
  z-index: 2;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


/**
 * PopularProductComponent
 */
class PopularProductComponent extends React.Component
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
    return(
      <Container>
        <Circle/>
        <Image src={this.state.data.image} />
        <Information>
          <Icon>
            <ShoppingCartOutlined/>
          </Icon>
          <Icon>
            <SearchOutlined/>
          </Icon>
          <Icon>
            <HeartBrokenOutlined/>
          </Icon>
        </Information>
      </Container>
    );
  }
}

export default PopularProductComponent;