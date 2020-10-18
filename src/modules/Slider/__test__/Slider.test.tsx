
import React from "react";
import { shallow, mount } from "enzyme";
import * as renderer from "react-test-renderer";
import {Slider} from "./../index";

describe("Slider", () => {
  const defaultProps = {
    data: ['Image-1'],
  };

  it("should render the Slider", () => {
    const subject = shallow(<Slider {...defaultProps} />);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<Slider {...defaultProps} />).toJSON();
    expect(subject).toMatchSnapshot();
  });
});