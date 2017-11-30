/* @flow */
import { createElement } from "react";
import classNames from "classnames";
import assign from "object-assign";

const headerMapping = {
  h1: "heading-a",
  h2: "heading-b",
  h3: "heading-c",
  h4: "heading-d",
  h5: "heading-e",
  h6: "heading-f"
};

const headingComponents = {};

const createClass = h => props => {
  const headerClass = headerMapping[h];
  const { className, children, ...headingProps } = props;
  const classes = classNames(className, headerClass, props.hidden ? "hide-content" : "");
  const propsToAssign = assign({ className: classes }, headingProps);
  return createElement(h, propsToAssign, children);
};

for (const h in headerMapping) {
  headingComponents[h.toUpperCase()] = createClass(h);
}

export default headingComponents;
