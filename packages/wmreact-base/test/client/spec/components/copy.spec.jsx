import React from "react";
import { shallow } from "enzyme";

import Copy from "src/components/copy";

describe("Copy", () => {
  describe("Mounting", () => {
    it("should render into the document", () => {
      const component = shallow(<Copy>Foo</Copy>);
      expect(component).to.not.be.null;
    });
  });

  describe("Props", () => {
    it("do the copy-open-leading copy", () => {
      const component = shallow(<Copy.OpenLeading>Foo</Copy.OpenLeading>);
      expect(component)
        .to.shallowly.find(".copy-open-leading")
        .to.have.length(1);
    });

    it("do the copy-small copy", () => {
      const component = shallow(<Copy.Small>Foo</Copy.Small>);
      expect(component)
        .to.shallowly.find(".copy-small")
        .to.have.length(1);
    });

    it("do the copy-mini copy", () => {
      const component = shallow(<Copy.Mini>Foo</Copy.Mini>);
      expect(component)
        .to.shallowly.find(".copy-mini")
        .to.have.length(1);
    });

    it("should support extra classNames", () => {
      const component = shallow(<Copy className={"no-extras-classname"} />);
      expect(component)
        .to.shallowly.find(".no-extras-classname")
        .to.have.length(1);
    });
  });
});
