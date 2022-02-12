import React from "react";
import {
  Navbar,
  Container
} from "react-bootstrap"

/**
 * FooterComponent
 *
 * This will generate the footer.
 */
class FooterComponent extends React.Component
{
  /**
   * constructor
   *
   * Basic constructor sets copyYear and company name in state var
   * @param props
   */
  constructor(props)
  {
    super(props);
    this.state = {
      copyYear: props.copyYear,
      companyName: props.companyName
    };
  }

  /**
   * render
   *
   * This is the render method called by react.
   * @returns {JSX.Element}
   */
  render()
  {
    return (
      <div className="fixed-bottom">
        <Navbar bg="dark" variant="dark" className="text-center">
          <Container className="text-white text-center">
            <p className="text-center">&copy; {this.state.copyYear}  {this.state.companyName}</p>
          </Container>
        </Navbar>
      </div>
    )
  }
}

// Export FooterComponent.
export default FooterComponent;