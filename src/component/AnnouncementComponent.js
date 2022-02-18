import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: darkred;
  color: white;
  height: 35px;
  border-bottom: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;


class AnnouncementComponent extends React.Component
{

  render()
  {
    return (
      <Container>A basic announcement</Container>
    );
  }
}

export default AnnouncementComponent;