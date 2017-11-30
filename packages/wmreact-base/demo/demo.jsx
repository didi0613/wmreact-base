import React from "react";
import ElectrodeDemoIndex from "@walmart/electrode-demo-index";

import * as libraryScope from "../src/index";
import * as extraScope from "./demo-extended-scope";

const components = [
  {
    title: "FocusOnMount",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/focus-on-mount.example"),
        noRender: true
      }
    ]
  },
  {
    title: "FocusOnChange",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/focus-on-change.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Body",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/body.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Body.png")
    }
  },
  {
    title: "Copy",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/copy.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Copy.png")
    }
  },
  {
    title: "Descriptions",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/descriptions.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Descriptions.png")
    }
  },
  {
    title: "Heading",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/heading.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Heading.png")
    }
  },
  {
    title: "Icon",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/icon.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Icon.png")
    }
  },
  {
    title: "Image",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/image.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Image.png")
    }
  },
  {
    title: "Link",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/link.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Link.png")
    }
  },
  {
    title: "SkipLink",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/skip-link.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Link.png")
    }
  },
  {
    title: "Tile",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/tile.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Video",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/video.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Video.png")
    }
  }
];

const demo = () => (
  <ElectrodeDemoIndex
    libraryScope={Object.assign({}, libraryScope, extraScope)}
    components={components}
  />
);

export default demo;
