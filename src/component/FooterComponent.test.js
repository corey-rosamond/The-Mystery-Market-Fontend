import renderer from 'react-test-renderer';
import FooterComponent from "./FooterComponent";

test('Footer Component Renders', () => {
  const component = renderer.create(<FooterComponent/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});