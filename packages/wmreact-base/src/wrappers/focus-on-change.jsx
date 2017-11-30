import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import matches from "lodash/matches";
import { firstMatching } from "./focus-helpers";

export default (WrappedComponent, after, selector) => {
  let predicate;
  if (typeof after === "function") {
    predicate = after;
  } else {
    const afterPredicate = matches(after);
    predicate = (newProps, oldProps) => afterPredicate(newProps) && !afterPredicate(oldProps);
  }

  return class FocusOnChange extends Component {
    componentDidUpdate(prevProps) {
      if (predicate(this.props, prevProps)) {
        const el = firstMatching(findDOMNode(this), selector);
        if (el) {
          el.focus();
        }
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
