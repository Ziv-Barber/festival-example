"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _messages = _interopRequireDefault(require("./messages"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**

 * Countdown react component.

 *

 * Supported CSS classes:

 *

 * root - the main container (Material UI Papaer)

 * box - the container for each countdown segment (Material UI Papaer)

 * value - the value text in each box (Material UI Typography)

 * text - the caption text in each box (Material UI Typography)

 * @reactProps {Date} date - the countdown end date.

 * @reactProps {boolean} leadZero - is true to display leading zero for numbers below 10. Default is false.

 * @reactProps {Node} Finished - optional component to display instead of the countdown when it's over. The default is none.

 * @reactProps {string} className - optional CSS Class name to use for the main element of the component.

 * @reactProps {string} classes - optional list of CSS Classes to use for internal elements of this component.

 */
var Countdown =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Countdown, _React$PureComponent);

  function Countdown(props) {
    var _this;

    _classCallCheck(this, Countdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Countdown).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "interval", void 0);

    _this.interval = null; // Calculate the first countdown status:

    _this.state = _this.calculateCountdown(props.date, props.curDate);
    return _this;
  }
  /**

   * Mount this component.

   */


  _createClass(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // We'll update the countdown every second:
      if (this.state.isTimeLeft) {
        this.interval = setInterval(function () {
          var date = _this2.calculateCountdown(_this2.props.date);

          date.isTimeLeft ? _this2.setState(date) : _this2.stop();
        }, 1000);
      } // Endif.

    }
    /**

     * Unmount this component.

     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Destroy the timer:
      this.stop();
    }
  }, {
    key: "render",
    value: function render() {
      var countDown = this.state;
      var _this$props = this.props,
          classes = _this$props.classes,
          className = _this$props.className,
          finished = _this$props.finished; // Option to display something else when the timer is over:

      if (!countDown.isTimeLeft && finished) {
        return finished;
      } // Endif.


      return _react.default.createElement(_Paper.default, {
        className: className || classes.root
      }, countDown.years > 0 ? _react.default.createElement(_Paper.default, {
        className: classes.box
      }, _react.default.createElement(_Typography.default, {
        className: classes.value
      }, this.prepareNumberToDisplay(countDown.years)), _react.default.createElement(_Typography.default, {
        className: classes.text
      }, countDown.years === 1 ? _react.default.createElement(_reactIntl.FormattedMessage, _messages.default.year) : _react.default.createElement(_reactIntl.FormattedMessage, _messages.default.years))) : null, _react.default.createElement(_Paper.default, {
        className: classes.box
      }, _react.default.createElement(_Typography.default, {
        className: classes.value
      }, this.prepareNumberToDisplay(countDown.days)), _react.default.createElement(_Typography.default, {
        className: classes.text
      }, countDown.days === 1 ? _react.default.createElement(_reactIntl.FormattedMessage, _messages.default.day) : _react.default.createElement(_reactIntl.FormattedMessage, _messages.default.days))), _react.default.createElement(_Paper.default, {
        className: classes.box
      }, _react.default.createElement(_Typography.default, {
        className: classes.value
      }, this.prepareNumberToDisplay(countDown.hours)), _react.default.createElement(_Typography.default, {
        className: classes.text
      }, _react.default.createElement(_reactIntl.FormattedMessage, _messages.default.hours))), _react.default.createElement(_Paper.default, {
        className: classes.box
      }, _react.default.createElement(_Typography.default, {
        className: classes.value
      }, this.prepareNumberToDisplay(countDown.min)), _react.default.createElement(_Typography.default, {
        className: classes.text
      }, _react.default.createElement(_reactIntl.FormattedMessage, _messages.default.min))), _react.default.createElement(_Paper.default, {
        className: classes.box
      }, _react.default.createElement(_Typography.default, {
        className: classes.value
      }, this.prepareNumberToDisplay(countDown.sec)), _react.default.createElement(_Typography.default, {
        className: classes.text
      }, _react.default.createElement(_reactIntl.FormattedMessage, _messages.default.sec))));
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      } // Endif.

    }
    /**

     * Calculate the counter's values.

     * @param {Date} endDate The end date of the counter.

     */

  }, {
    key: "calculateCountdown",
    value: function calculateCountdown(endDate) {
      var curDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var timeDiff = (new Date(endDate) - (curDate ? new Date(curDate) : new Date())) / 1000; // The default state:

      var timeLeft = {
        isTimeLeft: false,
        years: 0,
        days: 0,
        hours: 0,
        min: 0,
        sec: 0 // Clear countdown when date is reached:

      };

      if (timeDiff <= 0) {
        return timeLeft;
      } // Endif.
      // We do need a countdown:


      timeLeft.isTimeLeft = true; // Calculate time time difference between now and expected date:

      var yearVal = 365 * 24 * 60 * 60;

      if (timeDiff >= yearVal) {
        timeLeft.years = Math.floor(timeDiff / yearVal);
        timeDiff -= timeLeft.years * yearVal;
      } // Endif.


      var dayVal = 24 * 60 * 60;

      if (timeDiff >= dayVal) {
        timeLeft.days = Math.floor(timeDiff / dayVal);
        timeDiff -= timeLeft.days * dayVal;
      } // Endif.


      var hourVal = 60 * 60;

      if (timeDiff >= hourVal) {
        timeLeft.hours = Math.floor(timeDiff / hourVal);
        timeDiff -= timeLeft.hours * hourVal;
      } // Endif.


      if (timeDiff >= 60) {
        timeLeft.min = Math.floor(timeDiff / 60);
        timeDiff -= timeLeft.min * 60;
      } // Endif.


      timeLeft.sec = Math.floor(timeDiff);
      return timeLeft;
    }
  }, {
    key: "prepareNumberToDisplay",
    value: function prepareNumberToDisplay(valueIn) {
      var value = String(valueIn || 0);

      if (this.props.leadZero && value.length < 2) {
        value = "0".concat(value);
      } // Endif.


      return value;
    }
  }]);

  return Countdown;
}(_react.default.PureComponent);

_defineProperty(Countdown, "defaultProps", {
  date: new Date(),
  curDate: null,
  leadZero: false,
  Finished: null,
  classes: {
    root: 'countdownRoot',
    box: 'countdownBox',
    value: 'countdownValue',
    text: 'countdownText'
  }
});

var _default = Countdown;
exports.default = _default;

//# sourceMappingURL=index.js.map