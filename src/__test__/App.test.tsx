
import React from "react";
import { shallow, mount } from "enzyme";
import * as renderer from "react-test-renderer";
import App from "./../App";

describe("App", () => {

  it("should render the App", () => {
    const subject = shallow(<App/>);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<App/>).toJSON();
    expect(subject).toMatchSnapshot();
  });
});