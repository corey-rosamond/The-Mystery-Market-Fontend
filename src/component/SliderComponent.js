import React from "react";
import styled from "styled-components";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined
} from "@mui/icons-material";
import {Slides} from "../data/Slides";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow:hidden;
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
  z-index: 100;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};
`;

const ImageContainer = styled.div`
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InformationContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

/**
 * SliderComponent
 */
class SliderComponent extends React.Component
{
  /**
   * constructor
   * @param props
   */
  constructor(props)
  {
    super(props);
    this.state = {
      slides: Slides,
      slideIndex: 0,
    };
  }

  /**
   * handleClick
   * @param direction
   */
  handleClick(direction)
  {
    if(direction === "left")
    {
      this.setState({
        slideIndex: (this.state.slideIndex > 0 ? this.state.slideIndex-1:this.state.slides.length-1)
      });
    } else
    {
      this.setState({
        slideIndex: (this.state.slideIndex < (this.state.slides.length-1) ? this.state.slideIndex+1: 0)
      });
    }
    console.log(this.state.slides.length);
  }

  /**
   * render
   * @returns {JSX.Element}
   */
  render()
  {

    return (
      <Container>
        <Arrow direction="left" onClick={() => this.handleClick("left")}>
          <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={this.state.slideIndex}>
          {this.state.slides.map(slide => {
            return (
              <Slide key={slide._id} bg={slide.backgroundColor}>
                <ImageContainer>
                  <Image src={slide.image} />
                </ImageContainer>
                <InformationContainer>
                  <Title>{slide.title}</Title>
                  <Description>{slide.description}</Description>
                  <Button>{slide.button}</Button>
                </InformationContainer>
              </Slide>
            );
          })}
        </Wrapper>
        <Arrow direction="right" onClick={() => this.handleClick("right")}>
          <ArrowRightOutlined/>
        </Arrow>
      </Container>
    );
  }
}

export default SliderComponent;