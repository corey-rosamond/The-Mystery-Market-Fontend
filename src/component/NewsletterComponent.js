import React from "react";
import styled from "styled-components";
import {
  Send
} from "@mui/icons-material";

const Container = styled.div`
  height: 30vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  cursor: pointer;
  background-color: teal;
  color: white;
`;

class NewsletterComponent extends React.Component
{


  render()
  {
    return(
      <Container>
        <Title>Newsletter</Title>
        <Description>
          Get up to date information on our newest products!
        </Description>
        <InputContainer>
          <Input placeholder="Your email address" />
          <Button>
            <Send/>
          </Button>
        </InputContainer>
      </Container>
    );
  }
}

export default NewsletterComponent;