import React from "react";
import { shallow } from "enzyme";

import SkipLink from "src/components/skip-link";

describe("SkipLink", () => {
  describe("Mounting", () => {
    it("should render into the document", () => {
      const component = shallow(
        <SkipLink scrollToView={true} referenceId="skipToModule" linkText="Skip to somewhere" />
      );

      expect(component).to.not.be.null;
      expect(component)
        .to.shallowly.find(".skipModuleLink")
        .to.have.length(1);
    });
  });

  describe("onClick", () => {
    const sandbox = sinon.sandbox.create();

    let focusElementSpy;
    let getElementByIdStub;
    let getWindowStub;
    let scrollSpy;
    let _window;

    beforeEach(() => {
      focusElementSpy = sandbox.spy(SkipLink.prototype, "_focusElement");
      getElementByIdStub = sandbox.stub();
      getWindowStub = sandbox.stub(SkipLink.prototype, "_getWindow");
      scrollSpy = sandbox.spy();

      _window = { scroll: scrollSpy };
    });

    afterEach(() => {
      sandbox.restore();
    });

    it("should do nothing when document cannot be found", () => {
      getWindowStub.returns(_window);

      const component = shallow(
        <SkipLink
          linkText="Skip to somewhere"
          focusElement={focusElementSpy}
          getWindow={getWindowStub}
          referenceId="skipToModule"
        />
      );

      component.find(".skipModuleLink").simulate("click");
      expect(focusElementSpy).to.have.not.been.called;
    });

    it("should do nothing when element cannot be found", () => {
      getElementByIdStub.returns(undefined);
      _window.document = {
        getElementById: getElementByIdStub
      };
      getWindowStub.returns(_window);

      const component = shallow(
        <SkipLink
          linkText="Skip to somewhere"
          focusElement={focusElementSpy}
          getWindow={getWindowStub}
          referenceId="skipToModule"
        />
      );

      component.find(".skipModuleLink").simulate("click");
      expect(focusElementSpy).to.have.not.been.called;
    });

    it("should focus when element when found", () => {
      getElementByIdStub.returns({
        focus: () => undefined,
        removeAttribute: () => undefined
      });
      _window.document = { getElementById: getElementByIdStub };
      getWindowStub.returns(_window);

      const component = shallow(
        <SkipLink linkText="Skip to somewhere" referenceId="skipToModule" />
      );

      component.find(".skipModuleLink").simulate("click", {
        preventDefault: () => undefined,
        stopPropagation: () => undefined
      });
      expect(focusElementSpy).to.have.been.called;
      expect(scrollSpy).to.have.not.been.called;
    });

    it("should focus on element when found and scroll when has prop coordinates", () => {
      getElementByIdStub.returns({
        focus: () => undefined,
        removeAttribute: () => undefined
      });
      _window.document = { getElementById: getElementByIdStub };
      getWindowStub.returns(_window);

      const component = shallow(
        <SkipLink linkText="Skip to somewhere" referenceId="skipToModule" scrollX={0} scrollY={0} />
      );

      component.find(".skipModuleLink").simulate("click", {
        preventDefault: () => undefined,
        stopPropagation: () => undefined
      });
      expect(focusElementSpy).to.have.been.called;
      expect(scrollSpy).to.have.been.called;
    });
  });
});
