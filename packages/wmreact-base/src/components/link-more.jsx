/* @flow */
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import fireStatelessUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event";

/**
Link for more.
@examples
```jsx
<Link.More>
  Foo
</Link.More>
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Link.More
@import {Link}
@playground
```
<Link.More>
  Foo
</Link.More>
```
*/

class LinkMore extends Component {
  _onClick(event: Object, onClick) {
    fireStatelessUIEvent(this.props, this.context, event);
    if (onClick) {
      onClick(event);
    }
  }

  render() {
    const { children, className, hidden, onClick, ...other } = this.props;

    return (
      <a
        className={classNames("more-link", hidden ? "hide-content" : "", className)}
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

LinkMore.contextTypes = {
  analytics: PropTypes.object
};

LinkMore.propTypes = {
  /**
  Handles the onClick event.
  */
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  hidden: PropTypes.bool
};

export default LinkMore;
