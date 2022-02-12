import renderer from 'react-test-renderer';
import NavigationComponent from "./NavigationComponent";

describe('NavigationComponent', () => {
  test('Renders', () => {
    const component = renderer.create(<NavigationComponent/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});