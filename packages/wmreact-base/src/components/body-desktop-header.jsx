/* @flow */
import React from "react";
import PropTypes from "prop-types";
import Layout from "@walmart/wmreact-layout/lib/components/layout";

/**
The desktop header
@examples
```jsx
<DesktopHeader />
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component DesktopHeader
@import {DesktopHeader}
@playground
```
<DesktopHeader />
```
*/

/* eslint-disable no-magic-numbers */
const DesktopHeader = props => {
  const { headerHref, logoImage, title, navText, navTarget } = props;
  return (
    <header className="zeus-header">
      <Layout large-sizes={[6, 6]} padded vertical="middle">
        <a href={headerHref} className="zeus-header-logo">
          <img alt="Walmart. Save Money. Live Better." src={logoImage} />
          {title && <h1>{title}</h1>}
        </a>
        <div className="text-right">{navText && <a href={navTarget}> {navText} </a>}</div>
      </Layout>
    </header>
  );
};
/* eslint-enable no-magic-numbers */

DesktopHeader.propTypes = {
  logoImage: PropTypes.string,
  title: PropTypes.string,
  navTarget: PropTypes.string,
  navText: PropTypes.string,
  headerHref: PropTypes.string
};

DesktopHeader.defaultProps = {
  logoImage: "",
  title: "",
  navTarget: "",
  navText: "",
  headerHref: "/"
};

export default DesktopHeader;
