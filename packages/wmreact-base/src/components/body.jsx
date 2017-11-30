/* @flow */
/*eslint max-len: [2, 100, 4, { "ignorePattern": ".*i5.walmartimages.com.*" }]*/
import React from "react";
import PropTypes from "prop-types";
import Layout from "@walmart/wmreact-layout/lib/components/layout";
import MediaSelector from "@walmart/wmreact-layout/lib/components/media-selector";

import MobileHeader from "./body-mobile-header";
import TabletHeader from "./body-tablet-header";
import DesktopHeader from "./body-desktop-header";

/**
Body container component.
@examples
```jsx
<Body>
  Foo
</Body>
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Body
@import {Body}
@playground
```
<Body title="Test Title">
  <p>Body Copy!</p>
</Body>
```
*/

const Body = props => {
  const { showHeader, showFooter, footerLeft, footerRight, children } = props;

  const _renderHeader = () => {
    return (
      <MediaSelector>
        <DesktopHeader visibleAtOrAbove="large" {...props} />
        <TabletHeader visibleWidths={["medium"]} {...props} />
        <MobileHeader hiddenAbove="small" {...props} />
      </MediaSelector>
    );
  };

  const _renderFooter = () => {
    return (
      <div className="clearfix zeus-footer">
        <Layout small={2} className="zeus-footer-container">
          <div className="zeus-footer-left">
            &copy; 2015&ndash;{new Date().getFullYear()} Walmart Stores, Inc.
          </div>
          <div className="zeus-footer-right">
            <div className="zeus-footer-left-content">{footerLeft}</div>
            <div className="zeus-footer-right-content">{footerRight}</div>
          </div>
        </Layout>
      </div>
    );
  };

  return (
    <div className="page-wrapper">
      {showHeader === true && _renderHeader()}
      <div className="body-wrapper">{children}</div>
      {showFooter === true && _renderFooter()}
    </div>
  );
};

Body.displayName = "Body";

Body.propTypes = {
  /**
  The logo image to use
  */
  logoImage: PropTypes.string,
  /**
  The page title
  */
  title: PropTypes.string,
  /**
  The navigation target
  */
  navTarget: PropTypes.string,
  /**
  The navigation text
  */
  navText: PropTypes.string,
  /**
  The short name for the nav
  */
  navShort: PropTypes.string,
  /**
  The navigation icon
  */
  navIcon: PropTypes.string,
  /**
  Extra content for the left of the footer
  */
  footerLeft: PropTypes.node,
  /**
  Extra content for the right of the footer
  */
  footerRight: PropTypes.node,
  /**
  True if the header should be shown
  */
  showHeader: PropTypes.bool,
  /**
  True if the footer should be shown
  */
  showFooter: PropTypes.bool,
  children: PropTypes.node
};

Body.defaultProps = {
  logoImage:
    "//i5.walmartimages.com/dfw/63fd9f59-a546/k2-_47005cc8-29da-4fa9-ac2c-45e102a55bf5.v1.png",
  title: "",
  navTarget: "",
  navText: "",
  navShort: "",
  navIcon: "",
  footerLeft: null,
  footerRight: (
    <a
      className="js-footer-feedback-opinion-lab"
      href="https://secure.opinionlab.com/ccc01/comment_card_d.asp"
    >
      Leave feedback
    </a>
  ),
  showHeader: true,
  showFooter: true,
  headerHref: "/"
};

export default Body;
