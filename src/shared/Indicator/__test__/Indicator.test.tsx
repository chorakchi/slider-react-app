
import React from "react";
import { shallow, mount } from "enzyme";
import * as renderer from "react-test-renderer";
import {Indicator} from "./../index";

describe("Indicator", () => {
  const defaultProps = {
    length: 3,
    onSelect: ()=> {},
    selected: 0,
  };

  it("should render the Indicator", () => {
    const subject = shallow(<Indicator {...defaultProps} />);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<Indicator {...defaultProps} />).toJSON();
    expect(subject).toMatchSnapshot();
  });
});