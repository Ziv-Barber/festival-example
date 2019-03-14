"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.scope = void 0;

var _reactIntl = require("react-intl");

var scope = 'app.components.Countdown';
/**
 * Messages for the Countdown component.
 *
 * This contains all the text for the Countdown component.
 */

exports.scope = scope;

var _default = (0, _reactIntl.defineMessages)({
  year: {
    id: "".concat(scope, ".year"),
    defaultMessage: 'Year'
  },
  years: {
    id: "".concat(scope, ".years"),
    defaultMessage: 'Years'
  },
  day: {
    id: "".concat(scope, ".day"),
    defaultMessage: 'Day'
  },
  days: {
    id: "".concat(scope, ".days"),
    defaultMessage: 'Days'
  },
  hours: {
    id: "".concat(scope, ".hours"),
    defaultMessage: 'Hours'
  },
  min: {
    id: "".concat(scope, ".min"),
    defaultMessage: 'Min'
  },
  sec: {
    id: "".concat(scope, ".sec"),
    defaultMessage: 'Sec'
  }
});

exports.default = _default;

//# sourceMappingURL=messages.js.map