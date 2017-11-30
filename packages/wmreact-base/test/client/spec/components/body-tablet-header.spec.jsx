import React from "react";
import { shallow } from "enzyme";
import BodyTabletHeader from "src/components/body-tablet-header";

describe("BodyTabletHeader", () => {
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      component = shallow(<BodyTabletHeader />);
    });

    it("should render into the document", () => {
      expect(component).to.not.be.null;
    });
  });
});
