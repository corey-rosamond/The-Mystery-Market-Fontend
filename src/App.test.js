import renderer from "react-test-renderer";
import App from './App';

test('App Renders', () => {
  const component = renderer.create(<App/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
