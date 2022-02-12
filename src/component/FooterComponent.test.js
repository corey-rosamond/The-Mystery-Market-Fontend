import renderer from 'react-test-renderer';
import FooterComponent from "./FooterComponent";

describe('FooterComponent', () => {
  test('Renders', () => {
    const component = renderer.create(<FooterComponent/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});