import renderer from 'react-test-renderer';
import HeaderComponent from "./HeaderComponent";

test('Header Component Renders', () => {
  const component = renderer.create(<HeaderComponent/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});