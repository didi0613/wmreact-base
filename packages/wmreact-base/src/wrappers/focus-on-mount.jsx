import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import { firstMatching } from "./focus-helpers";

export default (WrappedComponent, selector) => {
  return class FocusOnMount extends Component {
    componentDidMount() {
      const el = firstMatching(findDOMNode(this), selector);
      if (el) {
        el.focus();
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
