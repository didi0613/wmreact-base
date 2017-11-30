import React from "react";
import { shallow } from "enzyme";
import Body from "src/components/body";

describe("Body", () => {
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      component = shallow(<Body />);
    });

    it("should render into the document", () => {
      expect(component).to.not.be.null;
    });
  });

  describe("Props", () => {
    it("should allow for no header", () => {
      component = shallow(<Body showHeader={false} />);
      expect(component).to.not.be.null;
    });

    it("should allow for no footer", () => {
      component = shallow(<Body showFooter={false} />);
      expect(component).to.not.be.null;
    });
  });
});
