import NavigationComponent from "./NavigationComponent";

describe("NavigationComponent", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NavigationComponent/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});