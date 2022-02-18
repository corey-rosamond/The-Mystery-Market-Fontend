import React from "react";
import styled from "styled-components";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: lightblue;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightgray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
`;

class SliderComponent extends React.Component
{

  render()
  {

    return (
      <Container>
        <Arrow direction="left">
          <ArrowLeftOutlined/>
        </Arrow>

        <Arrow direction="right">
          <ArrowRightOutlined/>
        </Arrow>
      </Container>
    );
  }
}

export default SliderComponent;