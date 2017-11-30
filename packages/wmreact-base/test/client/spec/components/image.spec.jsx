import React from "react";
import { shallow, mount } from "enzyme";

import Image, { EMPTY_PIXEL } from "src/components/image";

describe("Image", () => {
  describe("Mounting", () => {
    it("should render into the document", () => {
      const component = shallow(<Image />);
      expect(component).to.not.be.null;
    });

    it("should render with size into the document", () => {
      const component = shallow(<Image size={45} />);
      expect(component).to.not.be.null;
    });

    it("should set a src", () => {
      const component = shallow(<Image size={45} src="blah1" />);
      expect(component.prop("src")).to.equal("blah1");
    });
  });

  describe("Lazy", () => {
    let component;

    beforeEach(() => {
      component = shallow(<Image src="blah2" lazy size={10} />);
    });

    it("should not have a src", () => {
      expect(component.prop("src")).to.equal(EMPTY_PIXEL);
    });

    it("should set the src after mounting", () => {
      const url = `http://i5.walmartimages.com/dfw/63fd9f59-cb38/k2-_c64da396-
                   3251-4aea-b5c6-154258b2bf59.v1.gif`;
      component = mount(<Image src={url} lazy size={10} />).find("img");
      expect(component.prop("src")).to.equal(url);
    });
  });

  describe("ondemand", () => {
    let component;

    beforeEach(() => {
      component = shallow(<Image src="blah2" ondemand size={10} />);
    });

    it("should not have a src", () => {
      expect(component.prop("src")).to.equal(EMPTY_PIXEL);
    });

    it("should not set the src after mounting", () => {
      const url = `http://i5.walmartimages.com/dfw/63fd9f59-cb38/k2-_c64da396-
                   3251-4aea-b5c6-154258b2bf59.v1.gif`;
      component = mount(<Image src={url} ondemand size={10} />).find("img");
      expect(component.prop("src")).to.equal(EMPTY_PIXEL);
    });

    it("should set the correct src once trigger load is", () => {
      const url = `http://i5.walmartimages.com/dfw/63fd9f59-cb38/k2-_c64da396-
                 3251-4aea-b5c6-154258b2bf59.v1.gif`;
      component = shallow(<Image src="blah" ondemand size={10} />);

      expect(component.prop("src")).to.equal(EMPTY_PIXEL);
      expect(component.state("mounted")).to.be.false;

      component.setProps({ src: url });

      expect(component.prop("src")).to.equal(url);
      expect(component.state("mounted")).to.be.true;
    });
  });
});
