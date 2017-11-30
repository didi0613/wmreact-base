/* @flow */
import { createElement } from "react";

import classNames from "classnames";

const wrapper = function(tagName: string, className: string): Object {
  return {
    render(): ReactElement {
      const cloneProps = {};
      for (const k in this.props) {
        cloneProps[k] = this.props[k];
      }
      cloneProps.className = classNames(this.props.className, className);
      return createElement(tagName, cloneProps, this.props.children);
    }
  };
};

export default wrapper;
