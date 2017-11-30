import React from "react";
import { shallow } from "enzyme";

import Heading from "src/components/heading";

describe("Heading", () => {
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      component = shallow(<Heading.H1>H1</Heading.H1>);
    });

    it("should render into the document", () => {
      expect(component).to.not.be.null;
    });
  });

  describe("Props", () => {
    it("should render 'heading-a' for H1", () => {
      component = shallow(<Heading.H1>H1</Heading.H1>);
      expect(component)
        .to.shallowly.find(".heading-a")
        .to.have.length(1);
    });

    it("should render 'heading-b' for H2", () => {
      component = shallow(<Heading.H2>H2</Heading.H2>);
      expect(component)
        .to.shallowly.find(".heading-b")
        .to.have.length(1);
    });

    it("should render 'heading-c' for H3", () => {
      component = shallow(<Heading.H3>H3</Heading.H3>);
      expect(component)
        .to.shallowly.find(".heading-c")
        .to.have.length(1);
    });

    it("should render 'heading-d' for H4", () => {
      component = shallow(<Heading.H4>H4</Heading.H4>);
      expect(component)
        .to.shallowly.find(".heading-d")
        .to.have.length(1);
    });

    it("should render 'heading-e' for H5", () => {
      component = shallow(<Heading.H5>H5</Heading.H5>);
      expect(component)
        .to.shallowly.find(".heading-e")
        .to.have.length(1);
    });

    it("should render 'heading-f' for H6", () => {
      component = shallow(<Heading.H6>H6</Heading.H6>);
      expect(component)
        .to.shallowly.find(".heading-f")
        .to.have.length(1);
    });

    it("should render the children", () => {
      component = shallow(
        <Heading.H6>
          <div className="foo">hello</div>
        </Heading.H6>
      );
      expect(component)
        .to.shallowly.find(".foo")
        .to.have.length(1);
    });

    it("should add in custom props", () => {
      component = shallow(<Heading.H1 data-custom-prop="yay!" />);
      expect(component)
        .to.shallowly.have.props("data-custom-prop")
        .equal("yay!");
    });
  });
});
