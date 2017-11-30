/* @flow */
import React from "react";
import PropTypes from "prop-types";
import Layout from "@walmart/wmreact-layout/lib/components/layout";

/**
The mobile header
@examples
```jsx
<MobileHeader />
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component MobileHeader
@import {MobileHeader}
@playground
```
<MobileHeader />
```
*/

/* eslint-disable no-magic-numbers */
const MobileHeader = props => {
  const { headerHref, title, navTarget, navIcon, navShort } = props;

  return (
    <header className="zeus-header">
      <Layout x-small-sizes={[2, 8]} padded vertical="middle">
        <a href={navTarget}>
          <i className="elc-icon elc-icon-16 elc-icon-angle-left" aria-hidden="true" />
          {navIcon && <i aria-hidden="true" className={`elc-icon elc-icon-20 ${navIcon}`} />}
          <span className="visuallyhidden">{navShort || "Back"}</span>
        </a>
        <div className="text-center">
          <a href={headerHref} className="zeus-header-logo">
            <i
              title="Walmart. Save Money. Live Better."
              className="valign-middle elc-icon elc-icon-spark elc-icon-32"
            />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </Layout>
    </header>
  );
};
/* eslint-enable no-magic-numbers */

MobileHeader.propTypes = {
  title: PropTypes.string,
  navTarget: PropTypes.string,
  navShort: PropTypes.string,
  navIcon: PropTypes.string,
  headerHref: PropTypes.string
};

MobileHeader.defaultProps = {
  title: "",
  navTarget: "",
  navShort: "",
  navIcon: "",
  headerHref: "/"
};

export default MobileHeader;
