import React from "react";
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";

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
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href={this.state.brandDestination}>{this.state.brandText}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={this.state.homeDestination}>{this.state.homeText}</Nav.Link>
              {this.state.navigationLinks.map((item)=>{
                let [text, destination] = item;
                return <Nav.Link href={destination} key={destination}>{text}</Nav.Link>
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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