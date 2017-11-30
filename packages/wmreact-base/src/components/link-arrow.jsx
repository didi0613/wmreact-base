/* @flow */
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import fireStatelessUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event";

/**
Link with arrow.
@examples
```jsx
<Link.Arrow>
  Foo
</Link.Arrow>
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Link.Arrow
@import {Link}
@playground
```
<Link.Arrow>
  Foo
</Link.Arrow>
```
*/
class LinkArrow extends Component {
  _onClick(event: Object, onClick) {
    fireStatelessUIEvent(this.props, this.context, event);
    if (onClick) {
      onClick(event);
    }
  }

  render() {
    const { active, children, className, hidden, onClick, ...other } = this.props;

    return (
      <a
        className={classNames(
          "arrow-link",
          active ? "active" : "",
          hidden ? "hide-content" : "",
          className
        )}
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

LinkArrow.contextTypes = {
  analytics: PropTypes.object
};

LinkArrow.propTypes = {
  /**
  True if it should apply `active`
  */
  active: PropTypes.bool,
  /**
  Handles the onClick event.
  */
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  hidden: PropTypes.bool
};

export default LinkArrow;
