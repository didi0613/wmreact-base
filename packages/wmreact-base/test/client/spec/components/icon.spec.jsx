import React from "react";
import { shallow } from "enzyme";

import Icon from "src/components/icon";

describe("Icon", () => {
  describe("Mounting", () => {
    it("should render into the document", () => {
      const component = shallow(<Icon name="truck" />);
      expect(component).to.not.be.null;
    });

    it("should render with size into the document", () => {
      const component = shallow(<Icon name="truck" size={32} />);
      expect(component).to.not.be.null;
    });

    it("should render the validation marker into the document", () => {
      const component = shallow(<Icon.ValidationMarker error="Foo" />);
      expect(component).to.not.be.null;
    });

    it("should render with a className passed in as a prop", () => {
      const component = shallow(<Icon.ValidationMarker error="Foo" className="foobar" />);
      expect(component).to.not.be.null;
      expect(component)
        .to.shallowly.find(".foobar")
        .to.have.length(1);
    });
  });
});
