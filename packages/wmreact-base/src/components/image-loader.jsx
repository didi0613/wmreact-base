/* @flow */
/* eslint prefer-const:0 */
import React from "react";
import PropTypes from "prop-types";
import ImageLoader from "react-imageloader";

import fireUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-ui-event";

/**
Image loader that manages errors and can display a loading
image.
@examples
```jsx
<ImageLoader src="foo.jpg" size={50} />
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component ImageLoader
@import {ImageLoader}
@playground
```
<div>
  <ImageLoader src="http://placehold.it/1000x1000" />
</div>
```
*/
const InstrumentedImageLoader = (props, context) => {
  const { onError, ...other } = props;

  const handleError = event => {
    onError(event);
    fireUIEvent({ context }, event, { eventType: "image-loader-error" });
  };

  return <ImageLoader {...other} onError={handleError} />;
};

InstrumentedImageLoader.propTypes = {
  onError: PropTypes.func
};

InstrumentedImageLoader.defaultProps = {
  onError: () => {}
};

InstrumentedImageLoader.contextTypes = {
  analytics: PropTypes.object
};

export default InstrumentedImageLoader;
