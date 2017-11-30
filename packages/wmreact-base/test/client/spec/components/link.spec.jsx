import React from "react";
import { shallow } from "enzyme";

import Link from "src/components/link";

describe("Link", () => {
  describe("Mounting", () => {
    it("should render into the document", () => {
      const component = shallow(<Link />);
      expect(component).to.not.be.null;
    });

    it("should render Arrow into the document", () => {
      const component = shallow(<Link arrow />);
      expect(component).to.not.be.null;
    });

    it("should render More into the document", () => {
      const component = shallow(<Link more />);
      expect(component).to.not.be.null;
    });

    it("should render Dropdown into the document", () => {
      const component = shallow(<Link dropdown />);
      expect(component).to.not.be.null;
    });
  });

  describe("Props", () => {
    describe("Standard Links", () => {
      it("should support arrow-link", () => {
        const component = shallow(<Link arrow />);
        expect(component).to.not.be.null;
        expect(component)
          .to.shallowly.find(".arrow-link")
          .to.have.length(1);
      });

      it("should support active", () => {
        const component = shallow(<Link active />);
        expect(component).to.not.be.null;
        expect(component)
          .to.shallowly.find(".active")
          .to.have.length(1);
      });

      it("should support more-link", () => {
        const component = shallow(<Link more />);
        expect(component).to.not.be.null;
        expect(component)
          .to.shallowly.find(".more-link")
          .to.have.length(1);
      });

      it("should support dropdown-link", () => {
        const component = shallow(<Link dropdown />);
        expect(component).to.not.be.null;
        expect(component)
          .to.shallowly.find(".dropdown-link")
          .to.have.length(1);
      });

      it("should support extra classNames", () => {
        const component = shallow(<Link className={"no-extras-classname"} />);
        expect(component).to.not.be.null;
        expect(component)
          .to.shallowly.find(".no-extras-classname")
          .to.have.length(1);
      });
    });

    describe("Arrow Links", () => {
      it("should render arrow into the document", () => {
        const component = shallow(<Link.Arrow />);
        expect(component).to.not.be.null;
        expect(component)
          .to.shallowly.find(".arrow-link")
          .to.have.length(1);
      });

      it("should support active", () => {
        const component = shallow(<Link.Arrow active />);
        expect(component).to.not.be.null;
        expect(component)
          .to.shallowly.find(".active")
          .to.have.length(1);
      });

      it("should support extra classNames", () => {
        const component = shallow(<Link.Arrow className={"no-extras-classname"} />);
        expect(component).to.not.be.null;
        expect(component)
          .to.shallowly.find(".arrow-link")
          .to.have.length(1);
        expect(component)
          .to.shallowly.find(".no-extras-classname")
          .to.have.length(1);
      });
    });

    describe("More Links", () => {
      it("should render more into the document", () => {
        const component = shallow(<Link.More />);
        expect(component).to.not.be.null;
        expect(component)
          .to.shallowly.find(".more-link")
          .to.have.length(1);
      });

      it("should support extra classNames", () => {
        const component = shallow(<Link.More className={"no-extras-classname"} />);
        expect(component).to.not.be.null;
        expect(component)
          .to.shallowly.find(".more-link")
          .to.have.length(1);
        expect(component)
          .to.shallowly.find(".no-extras-classname")
          .to.have.length(1);
      });
    });

    describe("Dropdown Links", () => {
      it("should render dropdown into the document", () => {
        const component = shallow(<Link.Dropdown />);
        expect(component).to.not.be.null;
        expect(component)
          .to.shallowly.find(".dropdown-link")
          .to.have.length(1);
      });

      it("should support extra classNames", () => {
        const component = shallow(<Link.Dropdown className={"no-extras-classname"} />);
        expect(component).to.not.be.null;
        expect(component)
          .to.shallowly.find(".dropdown-link")
          .to.have.length(1);
        expect(component)
          .to.shallowly.find(".no-extras-classname")
          .to.have.length(1);
      });
    });
  });
});
