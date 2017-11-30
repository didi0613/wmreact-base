/* @flow */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
Makes samll copy
@examples
```jsx
<Copy.Small>
  Foo
</Copy.Small>
```
@return {ReactElement} - React element
@param {object} props Properties
@component Copy.Small
@import {Copy}
@references Copy
@playground
```
<Copy.Small>
  Foo
</Copy.Small>
```
*/
const CopySmall = props => {
  const { children, hidden } = props;

  return <p className={classNames("copy-small", hidden ? "hide-content" : "")}>{children}</p>;
};

CopySmall.displayName = "Copy.Small";

CopySmall.propTypes = {
  children: PropTypes.node,
  hidden: PropTypes.bool
};

export default CopySmall;
