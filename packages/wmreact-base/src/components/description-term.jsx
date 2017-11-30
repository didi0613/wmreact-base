/* @flow */
import React from "react";
import PropTypes from "prop-types";
/**
Description term
@component Descriptions.Term
@import {Descriptions}
@references Descriptions
@return {ReactElement} - React element
@param {object} props Properties
*/
const DescriptionTerm = props => {
  const { children, hidden } = props;

  return <dt className={hidden ? "hide-content" : ""}>{children}</dt>;
};

DescriptionTerm.displayName = "Descriptions.Term";

DescriptionTerm.propTypes = {
  children: PropTypes.node,
  hidden: PropTypes.bool
};

export default DescriptionTerm;
