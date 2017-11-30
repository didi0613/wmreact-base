import React from "react";
import { shallow } from "enzyme";
import ImageLoader from "src/components/image-loader";

describe("ImageLoaderLoader", () => {
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      component = shallow(<ImageLoader src="image-loader-url" />);
    });

    it("should render into the document", () => {
      expect(component).to.not.be.null;
    });
  });
});
