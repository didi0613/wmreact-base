/* @flow */

import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { canUseDOM } from "exenv";
import isNumber from "lodash/isNumber";

/**
The base SkipLink component.
@examples
```jsx
<div>
<SkipLink
  scrollToView={true}
  referenceId="skipToModule"
  linkText="Skip to somewhere"/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <a id="skipToModule" href="https://www.walmart.com/" alt="Walmart Home page">
    Walmart Home
  </a>
</div>
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component SkipLink
@import {SkipLink}
@playground
SkipLink
```
<div>
<SkipLink scrollToView={true} referenceId="skipToModule" linkText="Skip to somewhere"/>
<SkipLink referenceId="skipToModule" linkText="Skip to somewhere"/>
<SkipLink scrollToView referenceId="skipToModule" linkText="Skip to somewhere"/>
<SkipLink id={skipToModule} linkText="Skip to me and show me"/>
</div>
```
*/

class SkipLink extends Component {
  constructor() {
    super();

    this.state = {
      active: false
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  _getWindow() {
    return canUseDOM ? window : {};
  }

  _focusElement(ev, { _window, skipToElement, scrollX, scrollY }) {
    ev.preventDefault();

    skipToElement.tabIndex = "-1";
    skipToElement.focus();
    skipToElement.removeAttribute("tabindex");

    if (isNumber(scrollX) && isNumber(scrollY)) {
      _window.scroll(scrollX, scrollY);
    }

    ev.stopPropagation();
  }

  handleBlur() {
    if (this.props.scrollToView && !this.state.active) {
      this.skipModuleLink.scrollIntoView();
    }
    this.setState({ active: false });
  }

  handleClick(ev) {
    const _window = this._getWindow();

    if (_window.document) {
      const { referenceId, scrollX, scrollY } = this.props;
      const skipToElement = _window.document.getElementById(referenceId);

      if (skipToElement) {
        this._focusElement(ev, { _window, skipToElement, scrollX, scrollY });
      }
    }
  }

  handleFocus() {
    this.setState({ active: true });
  }

  render() {
    const {
      className,
      linkText,
      referenceId,
      scrollToView, //eslint-disable-line no-unused-vars
      scrollX, //eslint-disable-line no-unused-vars
      scrollY, //eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const classes = classNames("skipModuleLink", "font-semibold", className, {
      visuallyhidden: !this.state.active
    });

    return (
      <a
        className={classes}
        href={`#${referenceId}`}
        onBlur={this.handleBlur}
        onClick={this.handleClick}
        onFocus={this.handleFocus}
        {...other}
        ref={anchor => (this.skipModuleLink = anchor)} //eslint-disable-line no-return-assign
      >
        {linkText}
      </a>
    );
  }
}

SkipLink.propTypes = {
  /**
  Aditional classes to support customized style
  */
  className: PropTypes.string,
  /**
  Text to displey for link
  */
  linkText: PropTypes.string,
  /**
  Reference where the skip should land
  */
  referenceId: PropTypes.string,
  /**
  whether to keep window in current viewport
  */
  scrollToView: PropTypes.bool,
  /**
  X-coordinate to scroll to on click
  */
  scrollX: PropTypes.number,
  /**
  Y-coordinate to scroll to on click
  */
  scrollY: PropTypes.number
};

SkipLink.defaultProps = {
  className: "",
  linkText: "Skip this module",
  referenceId: "",
  scrollToView: false,
  scrollX: null,
  scrollY: null
};

export default SkipLink;
