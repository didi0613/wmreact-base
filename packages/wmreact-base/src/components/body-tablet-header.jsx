/* @flow */
import React from "react";
import PropTypes from "prop-types";
import Layout from "@walmart/wmreact-layout/lib/components/layout";

/**
The tablet header
@examples
```jsx
<TabletHeader />
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component TabletHeader
@import {TabletHeader}
@playground
```
<TabletHeader />
```
*/

/* eslint-disable no-magic-numbers */
const TabletHeader = props => {
  const { headerHref, logoImage, title, navTarget, navShort } = props;

  return (
    <header className="zeus-header">
      <Layout small-sizes={[2, 8]} medium-sizes={[2, 8]} padded vertical="middle">
        <a href={navTarget}>
          <i className="elc-icon elc-icon-16 elc-icon-angle-left" aria-hidden="true" />
          {navShort ? navShort : <span className="visuallyhidden">Back</span>}
        </a>
        <div className="text-center">
          <a href={headerHref} className="zeus-header-logo">
            <img alt="Walmart. Save Money. Live Better." src={logoImage} />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </Layout>
    </header>
  );
};
/* eslint-enable no-magic-numbers */

TabletHeader.propTypes = {
  logoImage: PropTypes.string,
  title: PropTypes.string,
  navTarget: PropTypes.string,
  navShort: PropTypes.string,
  headerHref: PropTypes.string
};

TabletHeader.defaultProps = {
  logoImage: "",
  title: "",
  navTarget: "",
  navShort: "",
  headerHref: "/"
};

export default TabletHeader;
