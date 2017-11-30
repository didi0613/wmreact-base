/* @flow */
/* eslint prefer-const:0, react/prop-types: 0 */
import React from "react";
import classNames from "classnames";

import ValidationMarker from "./icon-validation-marker";

const Icon = props => {
  let extras = {};
  let { tabIndex } = props;
  const { className, ariaHidden = false, hidden, name, size, ...other } = props;

  if (size) {
    extras[`elc-icon-${size}`] = true;
  }

  if (ariaHidden === false) {
    tabIndex = "";
  }

  return (
    <span
      aria-hidden={ariaHidden}
      tabIndex={tabIndex}
      className={classNames(
        "elc-icon",
        `elc-icon-${name}`,
        extras,
        hidden ? "hide-content" : "",
        className
      )}
      {...other}
      alt={`Icon for ${name}`}
    />
  );
};

const icons = {
  Truck: "truck",
  Cart: "cart",
  List: "list",
  Pin: "pin",
  Search: "search",
  Help: "help",
  Zoom: "zoom",
  ZoomOut: "zoom-out",
  Menu: "menu",
  Grid: "grid",
  Lock: "lock",
  Package: "package",
  Print: "print",
  Mail: "mail",
  Twitter: "twitter",
  Pinterest: "pinterest",
  Facebook: "facebook",
  Youtube: "youtube",
  GooglePlus: "google-plus",
  Vudu: "vudu",
  Mobile: "mobile",
  AddToCart: "add-to-cart",
  AddToList: "add-to-list",
  Store: "store",
  Add: "add",
  WeeklyAd: "weekly-ad",
  AngleLeft: "angle-left",
  AngleRight: "angle-right",
  Ok: "ok",
  ExclamationCircle: "exclamation-circle",
  CaretDown: "caret-down",
  CaretUp: "caret-up",
  Remove: "remove",
  Play: "play",
  BanCircle: "ban-circle",
  Spark: "spark",
  Trophy: "trophy",
  Star: "star",
  User: "user",
  ThumbsUp: "thumbs-up",
  Comment: "comment",
  PlayCircle: "play-circle",
  NewWindow: "new-window",
  ThumbsAltUp: "thumbs-alt-up",
  ThumbsAltDown: "thumbs-alt-down",
  Flag: "flag",
  Modal: "modal",
  Clock: "clock",
  SavingsCatcher: "savings-catcher",
  GiftCard: "gift-card",
  CreditCard: "credit-card",
  Pharmacy: "pharmacy",
  Membership: "membership",
  Holiday: "holiday",
  Promotion: "promotion",
  Easyreorder: "easyreorder",
  ExpressPickup: "express-pickup",
  Pause: "pause",
  BluRay: "blu-ray",
  Dvd: "dvd",
  Vod: "vod",
  SearchNav: "search-nav",
  PinNav: "pin-nav"
};

const _createIcon = name => props => {
  let extras = {};
  const { className, size, ...other } = props;

  if (size) {
    extras[`elc-icon-${size}`] = true;
  }
  return (
    <span
      className={classNames("elc-icon", `elc-icon-${name}`, extras, className)}
      alt={`Icon for ${name}`}
      {...other}
    />
  );
};

for (const k in icons) {
  Icon[k] = _createIcon(icons[k]);
}

Icon.ValidationMarker = ValidationMarker;

export default Icon;
