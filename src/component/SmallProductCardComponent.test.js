import renderer from 'react-test-renderer';
import SmallProductCardComponent from "./SmallProductCardComponent";

describe('SmallProductCardComponent', () => {
  test('Renders', () => {
    const component = renderer.create(<SmallProductCardComponent/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});