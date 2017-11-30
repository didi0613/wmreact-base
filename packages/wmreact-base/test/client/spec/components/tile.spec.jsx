/* eslint no-magic-numbers: 1 */
import React from "react";
import { shallow } from "enzyme";

import Tile from "src/components/tile";
import { checkImageSrc } from "@walmart/wmreact-image-utils/lib/utils/image-utils";
// eslint-disable-next-line
import * as fireStatelessUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event";

describe("Tile", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      alt: "TVs",
      height: 90,
      id: "3944_1060825_447913",
      src:
        "//i5.walmartimages.com/dfw/4ff9c6c9-5220/" +
        "k2-_ace57524-f8e5-4fb9-8189-4f94adf6d011.v1.jpg",
      title: "TVs",
      url: "http://www.walmart.com/#",
      width: 90
    };
    wrapper = shallow(<Tile {...props} />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it("should mount the component correctly", () => {
    expect(wrapper).to.be.not.undefined;
  });

  it("should render the correct type", () => {
    expect(wrapper).to.shallowly.have.type("div");
  });

  it("should set the default style classes", () => {
    expect(wrapper).to.shallowly.haveClass("Tile");
  });

  it("should set links to url prop", () => {
    let link = wrapper.find(".Tile-link");
    expect(link).to.shallowly.have.type("a");
    expect(link)
      .to.shallowly.have.props("href")
      .equal(props.url);

    link = wrapper.find(".Tile-heading-link");
    expect(link).to.shallowly.have.type("a");
    expect(link)
      .to.shallowly.have.props("href")
      .equal(props.url);
  });

  it("should properly set image properties", () => {
    props = { ...props, isMobile: true };
    wrapper = shallow(<Tile {...props} />);

    const image = wrapper.find(".Tile-image");

    expect(image).to.have.length(1);
    expect(image).to.shallowly.have.type("img");
    expect(image)
      .to.shallowly.have.props("src")
      .equal(checkImageSrc(props.src, props.height, props.width));
    expect(image)
      .to.shallowly.have.props("alt")
      .equal(props.alt);
    expect(image)
      .to.shallowly.have.props("id")
      .equal(props.id);
  });

  it("should set heading to title prop", () => {
    const heading = wrapper.find(".Tile-heading");

    expect(heading).to.have.length(1);
    expect(heading).to.shallowly.have.type("div");
    expect(heading).to.shallowly.have.text(props.title);
  });

  it("should not display heading when missing title", () => {
    wrapper = shallow(<Tile {...props} title={""} />);

    const heading = wrapper.find(".Tile-heading");

    expect(heading).to.have.length(0);
  });

  it("should fire analytics onClick", () => {
    const fireStatelessUIEventSpy = sinon.spy(fireStatelessUIEvent, "default");

    wrapper = shallow(<Tile {...props} />);

    wrapper.find(".Tile-link").simulate("click");
    wrapper.find(".Tile-heading-link").simulate("click");

    expect(fireStatelessUIEventSpy).to.have.been.called;
    fireStatelessUIEvent.default.restore();
  });
});
