/* @flow */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import DescriptionTerm from "./description-term";
import DescriptionDescription from "./description-description";

/**
Descriptions components family
@examples
```jsx
<Descriptions>
  <Descriptions.Term>Term</Descriptions.Term>
  <Descriptions.Description>Description</Descriptions.Description>
</Descriptions>
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Descriptions
@import {Descriptions}
@playground
```
<Descriptions>
  <Descriptions.Term>Term</Descriptions.Term>
  <Descriptions.Description>Description</Descriptions.Description>
</Descriptions>
```
*/
const Descriptions = props => {
  const {
    children,
    className,
    copyMini,
    copySmall,
    emphasize,
    hidden,
    horizontal,
    ...other
  } = props;

  const extras = {
    "copy-mini": copyMini,
    "copy-small": copySmall,
    "dl-horizontal": horizontal,
    "dl-emphasize": emphasize
  };

  return (
    <dl className={classNames(extras, className, hidden ? "hide-content" : "")} {...other}>
      {children}
    </dl>
  );
};

Descriptions.displayName = "Descriptions";

Descriptions.propTypes = {
  /**
  True if it should apply `dl-emphasize`
  */
  emphasize: PropTypes.bool,
  /**
  True if it should apply `dl-horizontal`
  */
  horizontal: PropTypes.bool,
  /**
  True if it should apply `copy-small`
  */
  copySmall: PropTypes.bool,
  /**
  True if it should apply `copy-mini`
  */
  copyMini: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  hidden: PropTypes.bool
};

Descriptions.defaultProps = {
  emphasize: false,
  horizontal: false,
  copySmall: false,
  copyMini: false
};

Descriptions.Term = DescriptionTerm;
Descriptions.Description = DescriptionDescription;
export default Descriptions;
