import React from "react";
import sinon from "sinon";
import { shallow, mount } from "enzyme";

import Video from "src/components/video";

describe("Video", () => {
  describe("Mounting", () => {
    it("should render into the document", () => {
      const component = shallow(<Video />);
      expect(component).to.not.be.null;
    });

    it("should render controls into the document", () => {
      const component = shallow(<Video controls={true} />);
      expect(component).to.not.be.null;
    });

    it("should render preload into the document", () => {
      const component = shallow(<Video preload={"none"} />);
      expect(component).to.not.be.null;
    });

    it("calls componentDidMount", () => {
      sinon.spy(Video.prototype, "componentDidMount");
      const wrapper = mount(<Video />);
      expect(Video.prototype.componentDidMount).to.have.property("callCount", 1);
      expect(wrapper).to.not.be.null;
      Video.prototype.componentDidMount.restore();
    });

    it("calls componentWillUnmount", () => {
      sinon.spy(Video.prototype, "componentWillUnmount");
      const wrapper = mount(<Video />);
      expect(Video.prototype.componentWillUnmount).to.have.property("callCount", 0);
      expect(wrapper).to.not.be.null;
      Video.prototype.componentWillUnmount.restore();
    });

    it("simulates click events", () => {
      const onClick = sinon.spy();
      const wrapper = mount(<Video onClick={onClick} />);
      wrapper.find("video").simulate("click");
      expect(onClick).to.have.property("callCount", 1);
    });
  });

  describe("Props", () => {
    it("should support src", () => {
      const component = shallow(<Video src={"test"} />);
      expect(component).to.not.be.null;
    });

    it("should support type", () => {
      const component = shallow(<Video type={"test"} />);
      expect(component).to.not.be.null;
    });

    it("should support autoPlay", () => {
      const component = shallow(<Video autoPlay={true} />);
      expect(component).to.not.be.null;
    });

    it("should support poster", () => {
      const component = shallow(<Video poster={"test"} />);
      expect(component).to.not.be.null;
    });

    it("should support className", () => {
      const component = shallow(<Video className={"test"} />);
      expect(component).to.not.be.null;
    });
    it("should support message", () => {
      const component = shallow(<Video message={"test"} />);
      expect(component).to.not.be.null;
    });
    it("should support showPlayBtn", () => {
      const component = shallow(<Video showPlayBtn={true} />);
      expect(component).to.not.be.null;
    });
    it("should support showPlayagain", () => {
      const component = shallow(<Video showPlayagain={true} />);
      expect(component).to.not.be.null;
    });
    it("should support playIconLink", () => {
      const component = shallow(<Video playIconLink={"test"} />);
      expect(component).to.not.be.null;
    });
  });
});
