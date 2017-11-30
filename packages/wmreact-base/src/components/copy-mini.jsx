/* @flow */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
Makes mini copy.
@examples
```jsx
<Copy.Mini>
  Foo
</Copy.Mini>
```
@return {ReactElement} - React element
@param {object} props Properties
@component Copy.Mini
@import {Copy}
@references Copy
@playground
```
<Copy.Mini>
  Foo
</Copy.Mini>
```
*/
const CopyMini = props => {
  const { children, hidden } = props;

  return <p className={classNames("copy-mini", hidden ? "hide-content" : "")}>{children}</p>;
};

CopyMini.displayName = "Copy.Mini";

CopyMini.propTypes = {
  children: PropTypes.node,
  hidden: PropTypes.bool
};

export default CopyMini;
