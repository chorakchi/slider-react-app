
import React from "react";
import { shallow, mount } from "enzyme";
import * as renderer from "react-test-renderer";
import {IconButton} from "./../index";

describe("IconButton", () => {
  const defaultProps = {
    onClick: () => {},
  };

  it("should render the IconButton", () => {
    const subject = shallow(<IconButton {...defaultProps} />);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<IconButton {...defaultProps} />).toJSON();
    expect(subject).toMatchSnapshot();
  });
});