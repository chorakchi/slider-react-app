
import React from "react";
import { shallow, mount } from "enzyme";
import * as renderer from "react-test-renderer";
import {Slides} from "./../index";

describe("Slides", () => {
  const defaultProps = {
    data: ['image-1','image-2'],
  };

  it("should render the Slides", () => {
    const subject = shallow(<Slides {...defaultProps} />);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<Slides {...defaultProps} />).toJSON();
    expect(subject).toMatchSnapshot();
  });
});