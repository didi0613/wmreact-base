import React from "react";
import { shallow } from "enzyme";
import BodyDesktopHeader from "src/components/body-desktop-header";

describe("BodyDesktopHeader", () => {
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      component = shallow(<BodyDesktopHeader />);
    });

    it("should render into the document", () => {
      expect(component).to.not.be.null;
    });

    it("should allow a custom url to be specified on the header", () => {
      component = shallow(<BodyDesktopHeader headerHref="foo.com" />);
      expect(component.find(".zeus-header-logo"))
        .to.shallowly.have.props("href")
        .eq("foo.com");
    });

    it("should default href to root", () => {
      expect(component.find(".zeus-header-logo"))
        .to.shallowly.have.props("href")
        .eq("/");
    });
  });
});
