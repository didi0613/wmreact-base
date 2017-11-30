/* @flow */
/* eslint react/prop-types: 0 */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
Validation marker component
@examples
```jsx
<Icon.ValidationMarker />
```
@return {ReactElement} - React element
@param {object} props Properties
@param {string} props.error Error
@component Icon.ValidationMarker
@import {Icon}
@playground
```
<Icon.ValidationMarker />
```
*/
const IconValidationMarker = props => {
  const { className, hidden, error, ...other } = props;

  const classes = classNames(
    "validation-marker validation-marker-error",
    hidden ? "hide-content" : "",
    className
  );

  return (
    <i className={classes} {...other}>
      <span className="visuallyhidden">{error}</span>
    </i>
  );
};

IconValidationMarker.propTypes = {
  /**
  The error string
  */
  error: PropTypes.string.isRequired,
  className: PropTypes.string,
  hidden: PropTypes.bool
};

export default IconValidationMarker;
