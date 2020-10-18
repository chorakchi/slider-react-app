
import React from "react";
import { shallow, mount } from "enzyme";
import * as renderer from "react-test-renderer";
import {Slider} from "./../index";

describe("Slider", () => {
  const defaultProps = {
    data: ['Image-1','Image-2'],
  };

  it("should render the Slider", () => {
    const subject = shallow(<Slider {...defaultProps} />);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<Slider {...defaultProps} />).toJSON();
    expect(subject).toMatchSnapshot();
  });

    it("should call onChangeSelector and rednder correctly and have a key on selecting Burger", () => {
    const mockCallback = jest.fn(() => "i return something!");
    const subject = mount(
      <Slider {...defaultProps} />
    );
    const backButton = subject.find("IconButton").filterWhere(item => {
      return item.prop("id") === "btn-back";
    });
    backButton.simulate("click");
    backButton.simulate("click");
        const nextButton = subject.find("IconButton").filterWhere(item => {
      return item.prop("id") === "btn-next";
    });
    nextButton.simulate("click");
    nextButton.simulate("click");
        const indicatorButton = subject.find("#Indicator-1").at(1);
    indicatorButton.simulate("click");
  });
});