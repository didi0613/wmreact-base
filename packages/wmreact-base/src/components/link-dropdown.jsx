/* @flow */
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import fireStatelessUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event";

/**
Dropdown link.
@examples
```jsx
<Link.Dropdown>
  Foo
</Link.Dropdown>
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Link.Dropdown
@import {Link}
@playground
```
<Link.Dropdown>
  Foo
</Link.Dropdown>
```
*/
class LinkDropdown extends Component {
  _onClick(event: Object, onClick) {
    fireStatelessUIEvent(this.props, this.context, event);
    if (onClick) {
      onClick(event);
    }
  }

  render() {
    const { onClick, children, className, hidden, ...other } = this.props;

    return (
      <a
        className={classNames("dropdown-link", hidden ? "hide-content" : "", className)}
        onClick={event => {
          this._onClick(event, onClick);
        }}
        {...other}
      >
        {children}
      </a>
    );
  }
}

LinkDropdown.contextTypes = {
  analytics: PropTypes.object
};

LinkDropdown.propTypes = {
  /**
  Handles the onClick event.
  */
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  hidden: PropTypes.bool
};

export default LinkDropdown;
