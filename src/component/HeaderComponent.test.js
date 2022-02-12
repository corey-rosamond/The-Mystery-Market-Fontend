import renderer from 'react-test-renderer';
import HeaderComponent from "./HeaderComponent";

describe('HeaderComponent', () => {
  test('Renders', () => {
    const component = renderer.create(<HeaderComponent/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});