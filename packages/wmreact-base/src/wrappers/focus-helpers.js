import find from "lodash/find";
import isArray from "lodash/isArray";
import flatten from "lodash/flatten";

export const isVisible = el => {
  // stolen from jQuery
  // https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
};

const allMatchingElements = (node, selector) =>
  isArray(selector)
    ? flatten(selector.map(s => Array.prototype.slice.call(node.querySelectorAll(s))))
    : node.querySelectorAll(selector);

export const firstMatching = (node, selector) =>
  selector ? find(allMatchingElements(node, selector), isVisible) : node;
