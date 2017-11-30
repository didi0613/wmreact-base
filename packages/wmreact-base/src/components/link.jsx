/* @flow */
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import LinkArrow from "./link-arrow";
import MoreArrow from "./link-more";
import DropdownArrow from "./link-dropdown";

import fireStatelessUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event";

/**
The base link component.
@examples
```jsx
<div>
  <Link href="#">Base Link</Link><br/>
  <Link href="#" arrow={true}>Arrow Link</Link><br/>
  <Link href="#" active={true}>Active Link</Link><br/>
  <Link href="#" dropdown={true}>Dropdown Link</Link>
</div>
```
@component Link
@import {Link}
@playground
Link
```
<div>
  <Link href="#">Base Link</Link><br/>
  <Link href="#" arrow={true}>Arrow Link</Link><br/>
  <Link href="#" active={true}>Active Link</Link><br/>
  <Link href="#" dropdown={true}>Dropdown Link</Link>
</div>
```
*/

class Link extends Component {
  _onClick(event: Object, onClick) {
    fireStatelessUIEvent(this.props, this.context, event);
    if (onClick) {
      onClick(event);
    }
  }

  render(): ReactElement {
    const {
      arrow,
      active,
      children,
      className,
      dropdown,
      hidden,
      more,
      onClick,
      ...other
    } = this.props;

    const extras = {
      "arrow-link": arrow,
      "more-link": more,
      "dropdown-link": dropdown
    };

    return (
      <a
        className={classNames(
          extras,
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

Link.contextTypes = {
  analytics: PropTypes.object
};

Link.propTypes = {
  /**
  True if you want to apply `arrow-link`
  */
  arrow: PropTypes.bool,
  /**
  True if you want to apply `more-link`
  */
  more: PropTypes.bool,
  /**
  True if you want to apply `dropdown-link`
  */
  dropdown: PropTypes.bool,
  /**
  Handles the onClick event.
  */
  onClick: PropTypes.func,
  /**
  True if you want to apply `active`
  */
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  hidden: PropTypes.bool
};

Link.defaultProps = {
  arrow: false,
  active: false,
  more: false,
  dropdown: false
};

Link.Arrow = LinkArrow;
Link.More = MoreArrow;
Link.Dropdown = DropdownArrow;

export default Link;
