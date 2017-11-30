/* @flow */
import React from "react";
import PropTypes from "prop-types";
/**
Description within a descriptions block
@component Descriptions.Description
@import {Descriptions}
@references Descriptions
@return {ReactElement} - React element
@param {object} props Properties
*/
const DescriptionDescription = props => {
  const { children, hidden } = props;

  return <dd className={hidden ? "hide-content" : ""}>{children}</dd>;
};

DescriptionDescription.displayName = "Descriptions.Description";

DescriptionDescription.propTypes = {
  children: PropTypes.node,
  hidden: PropTypes.bool
};

export default DescriptionDescription;
