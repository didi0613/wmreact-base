import React from "react";
import { shallow } from "enzyme";

import Descriptions from "src/components/descriptions";

describe("Descriptions", () => {
  describe("Mounting", () => {
    it("should render into the document", () => {
      const component = shallow(<Descriptions>Foo</Descriptions>);
      expect(component).to.not.be.null;
    });

    it("should render term into the document", () => {
      const component = shallow(<Descriptions.Term>Foo</Descriptions.Term>);
      expect(component).to.not.be.null;
    });

    it("should render description into the document", () => {
      const component = shallow(<Descriptions.Description>Foo</Descriptions.Description>);
      expect(component).to.not.be.null;
    });
  });

  describe("Props", () => {
    it("should support extra classNames", () => {
      const component = shallow(<Descriptions className={"no-extras-classname"}>Foo</Descriptions>);
      expect(component)
        .to.shallowly.find(".no-extras-classname")
        .to.have.length(1);
    });

    it("should support emphasize prop", () => {
      const component = shallow(<Descriptions emphasize>Foo</Descriptions>);
      expect(component)
        .to.shallowly.find(".dl-emphasize")
        .to.have.length(1);
    });

    it("should support horizontal prop", () => {
      const component = shallow(<Descriptions horizontal>Foo</Descriptions>);
      expect(component)
        .to.shallowly.find(".dl-horizontal")
        .to.have.length(1);
    });

    it("should support copySmall prop", () => {
      const component = shallow(<Descriptions copySmall>Foo</Descriptions>);
      expect(component)
        .to.shallowly.find(".copy-small")
        .to.have.length(1);
    });

    it("should support copyMini prop", () => {
      const component = shallow(<Descriptions copyMini>Foo</Descriptions>);
      expect(component)
        .to.shallowly.find(".copy-mini")
        .to.have.length(1);
    });
  });
});
