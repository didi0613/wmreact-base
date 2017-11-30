import React from "react";
import PropTypes from "prop-types";
import { checkImageSrc } from "@walmart/wmreact-image-utils/lib/utils/image-utils";
import fireStatelessUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event";

/**
A component for displaying a tile containing an image and optionally a title.
@examples
```jsx
<Tile
  alt="TVs"
  height={90}
  id="3944_1060825_447913"
  src="//i5.walmartimages.com/dfw/4ff9c6c9-5220/" +
    "k2-_ace57524-f8e5-4fb9-8189-4f94adf6d011.v1.jpg"
  title="TVs"
  url="/browse/electronics/tvs/3944_1060825_447913"
  width={90} />
```
@component Tile
@property {object} props
@property {object} context
@import {Tile}
@playground
Tile
```
<Tile
  alt="TVs"
  height={90}
  id="3944_1060825_447913"
  src="//i5.walmartimages.com/dfw/4ff9c6c9-5220/" +
    "k2-_ace57524-f8e5-4fb9-8189-4f94adf6d011.v1.jpg"
  title="TVs"
  url="/browse/electronics/tvs/3944_1060825_447913"
  width={90} />
```
*/

const Tile = (props, context) => {
  // Destructure props
  const { alt, height, id, src, title, url, width, extraClickFunction } = props;

  // Analytics onClick event handler
  const _onClick = event => {
    fireStatelessUIEvent(props, context, event);
    extraClickFunction({ title, url, id });
  };

  // Render Tile component
  return (
    <div className="Tile">
      <a className="Tile-link" href={url} onClick={_onClick}>
        <img
          className="Tile-image"
          alt={alt}
          id={id}
          src={checkImageSrc(src, height, width)}
          title={title}
        />
      </a>
      {title && (
        <div className="Tile-heading">
          <a className="Tile-heading-link" href={url} onClick={_onClick}>
            {title}
          </a>
        </div>
      )}
    </div>
  );
};

Tile.displayName = "Tile";

Tile.propTypes = {
  /**
  Image alt text
  */
  alt: PropTypes.string,
  /**
  Image height
  */
  height: PropTypes.number,
  /**
  Analytics id
  */
  id: PropTypes.string,
  /**
  Image source URL
  */
  src: PropTypes.string.isRequired,
  /**
  Header title
  */
  title: PropTypes.string,
  /**
  Clickable link
  */
  url: PropTypes.string.isRequired,
  /**
  Image width
  */
  width: PropTypes.number,
  /**
  Extra click functionality
   */
  extraClickFunction: PropTypes.func
};

Tile.defaultProps = {
  alt: "",
  height: 0,
  id: "",
  title: "",
  width: 0,
  extraClickFunction: () => {}
};

Tile.contextTypes = {
  analytics: PropTypes.object
};

export default Tile;
