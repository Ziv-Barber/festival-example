"use strict";

var _react = _interopRequireDefault(require("react"));

var _testUtils = require("@material-ui/core/test-utils");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars
// We want to spy on the timers:
jest.useFakeTimers();
/** @test {Countdown} */

describe('<Countdown />', function () {
  var shallow;
  beforeEach(function () {
    shallow = (0, _testUtils.createShallow)();
  }); // -------------------------------------------------------------------------
  // Helpers:
  // -------------------------------------------------------------------------
  // Function to help up to test the countdown boxes without repeat ourself:

  var testCountdownBox = function testCountdownBox(wrapper, pos, value, isLeadZero, text) {
    var textSingle = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    expect(wrapper.find('WithStyles(Typography)').at(pos).children().text()).toEqual("".concat(isLeadZero && value < 10 ? '0' : '').concat(value));
    expect(wrapper.find('WithStyles(Typography)').at(pos + 1).children().prop('id')).toEqual(value === 1 && textSingle ? textSingle : text);
  }; // Function to help up to test the countdown boxes without repeat ourself:


  var testCountdownValues = function testCountdownValues(wrapper, _ref) {
    var _ref$years = _ref.years,
        years = _ref$years === void 0 ? 0 : _ref$years,
        _ref$days = _ref.days,
        days = _ref$days === void 0 ? 0 : _ref$days,
        _ref$hours = _ref.hours,
        hours = _ref$hours === void 0 ? 0 : _ref$hours,
        _ref$min = _ref.min,
        min = _ref$min === void 0 ? 0 : _ref$min,
        _ref$sec = _ref.sec,
        sec = _ref$sec === void 0 ? 0 : _ref$sec,
        _ref$isLeadZero = _ref.isLeadZero,
        isLeadZero = _ref$isLeadZero === void 0 ? false : _ref$isLeadZero;
    var dayPos = years ? 2 : 0; // Check if the number of boxes match the expected:

    expect(wrapper.find('WithStyles(Typography)')).toHaveLength(8 + dayPos); // Check if we need to test for the years box:

    if (dayPos) {
      testCountdownBox(wrapper, 0, years, isLeadZero, 'app.components.Countdown.years', 'app.components.Countdown.year');
    } // Endif.


    testCountdownBox(wrapper, dayPos, days, isLeadZero, 'app.components.Countdown.days', 'app.components.Countdown.day');
    testCountdownBox(wrapper, dayPos + 2, hours, isLeadZero, 'app.components.Countdown.hours');
    testCountdownBox(wrapper, dayPos + 4, min, isLeadZero, 'app.components.Countdown.min');
    testCountdownBox(wrapper, dayPos + 6, sec, isLeadZero, 'app.components.Countdown.sec');
  }; // -------------------------------------------------------------------------
  // Unit tests:
  // -------------------------------------------------------------------------

  /** @test {Countdown} */


  it('setInterval should be called', function () {
    var curDate = new Date();
    var endDate = new Date(curDate);
    endDate.setSeconds(endDate.getSeconds() + 50);
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: endDate,
      curDate: curDate,
      leadZero: true
    })).instance();
    jest.advanceTimersByTime(1000);
    wrapper.componentWillUnmount();
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    expect(clearInterval).toHaveBeenCalledTimes(1);
  });
  /** @test {Countdown} */

  it('setInterval should not be called if the dates are equal', function () {
    var curDate = new Date();
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: curDate,
      curDate: curDate,
      leadZero: true
    })).instance();
    wrapper.stop();
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(clearInterval).toHaveBeenCalledTimes(1);
  });
  /** @test {Countdown} */

  it('should render alternative component if the countdown is finished', function () {
    var curDate = new Date();
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: curDate,
      curDate: curDate,
      leadZero: true,
      finished: _react.default.createElement("div", {
        id: "test"
      })
    }));
    expect(wrapper.html()).toEqual('<div id="test"></div>');
  });
  /** @test {Countdown} */

  it('#calculateCountdown() should parse the countdown values', function () {
    var curDate = new Date('Jan 1, 2019 00:00:00');
    var endDate = new Date(curDate);
    endDate.setFullYear(endDate.getFullYear() + 1);
    endDate.setDate(endDate.getDate() + 11);
    endDate.setHours(endDate.getHours() + 10);
    endDate.setMinutes(endDate.getMinutes() + 9);
    endDate.setSeconds(endDate.getSeconds() + 8);
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: endDate,
      curDate: curDate
    }));
    var res = wrapper.instance().calculateCountdown(endDate, curDate);
    expect(res.isTimeLeft).toEqual(true);
    expect(res.years).toEqual(1);
    expect(res.days).toEqual(11);
    expect(res.hours).toEqual(10);
    expect(res.min).toEqual(9);
    expect(res.sec).toEqual(8);
  });
  /** @test {Countdown} */

  it('#calculateCountdown() should detect same date', function () {
    var curDate = new Date('Jan 1, 2019 00:00:00');
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: curDate,
      curDate: curDate
    }));
    var res = wrapper.instance().calculateCountdown(curDate, curDate);
    expect(res.isTimeLeft).toEqual(false);
    expect(res.years).toEqual(0);
    expect(res.days).toEqual(0);
    expect(res.hours).toEqual(0);
    expect(res.min).toEqual(0);
    expect(res.sec).toEqual(0);
  });
  /** @test {Countdown} */

  it('#prepareNumberToDisplay() should add extra 0 for numbers below 10', function () {
    var curDate = new Date();
    var endDate = new Date(curDate);
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: endDate,
      curDate: curDate,
      leadZero: true
    }));
    expect(wrapper.instance().prepareNumberToDisplay(9)).toEqual('09');
  });
  /** @test {Countdown} */

  it('#prepareNumberToDisplay() should not add extra 0 for numbers below 10', function () {
    var curDate = new Date();
    var endDate = new Date(curDate);
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: endDate,
      curDate: curDate
    }));
    expect(wrapper.instance().prepareNumberToDisplay(9)).toEqual('9');
  });
  /** @test {Countdown} */

  it('#prepareNumberToDisplay() should add extra 0 for numbers above 9', function () {
    var curDate = new Date();
    var endDate = new Date(curDate);
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: endDate,
      curDate: curDate,
      leadZero: true
    }));
    expect(wrapper.instance().prepareNumberToDisplay(15)).toEqual('15');
  }); // -------------------------------------------------------------------------
  // Component tests:
  // -------------------------------------------------------------------------

  /** @test {Countdown} */

  it('should match snapshoot', function () {
    var curDate = new Date();
    var endDate = new Date(curDate);
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: endDate,
      curDate: curDate
    }));
    expect(wrapper).toMatchSnapshot();
  });
  /** @test {Countdown} */

  it('should render countdown with all 0', function () {
    var curDate = new Date();
    var endDate = new Date(curDate);
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: endDate,
      curDate: curDate
    }));
    testCountdownValues(wrapper, {});
  });
  /** @test {Countdown} */

  it('should render countdown with all 00', function () {
    var curDate = new Date();
    var endDate = new Date(curDate);
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: endDate,
      curDate: curDate,
      leadZero: true
    }));
    testCountdownValues(wrapper, {
      isLeadZero: true
    });
  });
  /** @test {Countdown} */

  it('should render countdown with all 11 and leadZero=true', function () {
    var curDate = new Date('Jan 1, 2019 00:00:00');
    var endDate = new Date(curDate);
    endDate.setDate(endDate.getDate() + 11);
    endDate.setHours(endDate.getHours() + 11);
    endDate.setMinutes(endDate.getMinutes() + 11);
    endDate.setSeconds(endDate.getSeconds() + 11);
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: endDate,
      curDate: curDate,
      leadZero: true
    }));
    testCountdownValues(wrapper, {
      days: 11,
      hours: 11,
      min: 11,
      sec: 11,
      isLeadZero: true
    });
  });
  /** @test {Countdown} */

  it('should render countdown for 2 days, 3 hours, 4 minutes, 5 seconds', function () {
    var curDate = new Date('Jan 1, 2019 00:00:00');
    var endDate = new Date(curDate);
    endDate.setDate(endDate.getDate() + 2);
    endDate.setHours(endDate.getHours() + 3);
    endDate.setMinutes(endDate.getMinutes() + 4);
    endDate.setSeconds(endDate.getSeconds() + 5);
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: endDate,
      curDate: curDate
    }));
    testCountdownValues(wrapper, {
      days: 2,
      hours: 3,
      min: 4,
      sec: 5
    });
  });
  /** @test {Countdown} */

  it('should render countdown for 1 day, 3 hours, 4 minutes, 5 seconds', function () {
    var curDate = new Date('Jan 1, 2019 00:00:00');
    var endDate = new Date(curDate);
    endDate.setDate(endDate.getDate() + 1);
    endDate.setHours(endDate.getHours() + 3);
    endDate.setMinutes(endDate.getMinutes() + 4);
    endDate.setSeconds(endDate.getSeconds() + 5);
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: endDate,
      curDate: curDate
    }));
    testCountdownValues(wrapper, {
      days: 1,
      hours: 3,
      min: 4,
      sec: 5
    });
  });
  /** @test {Countdown} */

  it('should render countdown for 2 years, 2 days, 3 hours, 4 minutes, 5 seconds', function () {
    var curDate = new Date('Jan 1, 2019 00:00:00');
    var endDate = new Date(curDate);
    endDate.setFullYear(endDate.getFullYear() + 2);
    endDate.setDate(endDate.getDate() + 2);
    endDate.setHours(endDate.getHours() + 6);
    endDate.setMinutes(endDate.getMinutes() + 4);
    endDate.setSeconds(endDate.getSeconds() + 5);
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: endDate,
      curDate: curDate
    })); // Note: There's one extra day in 2020 so we'll check with days = 3:

    testCountdownValues(wrapper, {
      years: 2,
      days: 3,
      hours: 6,
      min: 4,
      sec: 5
    });
  });
  /** @test {Countdown} */

  it('should render countdown for 1 year, 1 day, 3 hours, 4 minutes, 5 seconds', function () {
    var curDate = new Date('Jan 1, 2019 00:00:00');
    var endDate = new Date(curDate);
    endDate.setFullYear(endDate.getFullYear() + 1);
    endDate.setDate(endDate.getDate() + 1);
    endDate.setHours(endDate.getHours() + 3);
    endDate.setMinutes(endDate.getMinutes() + 4);
    endDate.setSeconds(endDate.getSeconds() + 5);
    var wrapper = shallow(_react.default.createElement(_index.default, {
      date: endDate,
      curDate: curDate
    }));
    testCountdownValues(wrapper, {
      years: 1,
      days: 1,
      hours: 3,
      min: 4,
      sec: 5
    });
  });
});

//# sourceMappingURL=index.test.js.map