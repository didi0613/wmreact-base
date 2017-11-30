/* @flow */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
Makes open-leading copy
@examples
```jsx
<Copy.OpenLeading>
  Foo
</Copy.OpenLeading>
```
@return {ReactElement} - React element
@param {object} props Properties
@component Copy.OpenLeading
@import {Copy}
@references Copy
@playground
```
<Copy.OpenLeading>
  Foo
</Copy.OpenLeading>
```
*/
const CopyOpenLeading = props => {
  const { children, hidden } = props;

  return (
    <p className={classNames("copy-open-leading", hidden ? "hide-content" : "")}>{children}</p>
  );
};

CopyOpenLeading.displayName = "Copy.OpenLeading";

CopyOpenLeading.propTypes = {
  children: PropTypes.node,
  hidden: PropTypes.bool
};

export default CopyOpenLeading;
