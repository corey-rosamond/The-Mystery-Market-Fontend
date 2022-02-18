import React from "react";
import styled from "styled-components";
import {
  Badge
} from "@mui/material"

import {
  Search,
  ShoppingCartOutlined
} from "@mui/icons-material";


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 1px solid lightgray;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const LanguageSelector = styled.span`
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

`;

const SearchInput = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px 0 0;
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;
`;


/**
 * NavigationComponent
 *
 * This is the NavigationComponent.
 */
class NavigationComponent extends React.Component
{
  /**
   * constructor
   *
   * constructor sets all the state vars.
   * @param props
   */
  constructor(props)
  {
    super(props);
    this.state = {
      brandText: props.brandText,
      brandDestination: props.brandDestination,
      homeText: props.homeText,
      homeDestination: props.homeDestination,
      navigationLinks: props.navigationLinks
    };
  }

  /**
   * render
   *
   * This a basic render method called by react.
   * @returns {JSX.Element}
   */
  render()
  {
    return (
      <Wrapper>
        <Left>
          <LanguageSelector>
            EN/Chinese
          </LanguageSelector>
          <SearchContainer>
            <SearchInput />
            <Search style={{color: "grey", fontSize:22}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>The Mystery Market</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    )
  }
}

export default NavigationComponent;

/**
 * <Nav.Link href="#link">Link</Nav.Link>
 *                   <NavDropdown title="Dropdown" id="basic-nav-dropdown">
 *                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
 *                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
 *                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
 *                     <NavDropdown.Divider />
 *                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
 *                   </NavDropdown>
 */