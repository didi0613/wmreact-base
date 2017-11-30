/* @flow */
import React from "react";
import PropTypes from "prop-types";
import OpenLeading from "./copy-openleading";
import Small from "./copy-small";
import Mini from "./copy-mini";

/**
Makes copy
@examples
```jsx
<Copy>
  Foo
</Copy>
```
@return {ReactElement} - React element
@param {object} props Properties
@component Copy
@import {Copy}
@playground
Copy
```
<Copy>Base Copy</Copy>
```
*/
const Copy = props => {
  const { children, hidden, ...other } = props;

  return (
    <p className={hidden ? "hide-content" : ""} {...other}>
      {children}
    </p>
  );
};

Copy.displayName = "Copy";

Copy.propTypes = {
  children: PropTypes.node,
  hidden: PropTypes.bool
};

Copy.OpenLeading = OpenLeading;
Copy.Small = Small;
Copy.Mini = Mini;

export default Copy;
