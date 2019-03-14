import React from 'react' // eslint-disable-line no-unused-vars
import { createShallow } from '@material-ui/core/test-utils'

import Countdown from '../index'

// We want to spy on the timers:
jest.useFakeTimers()

/** @test {Countdown} */
describe('<Countdown />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  // -------------------------------------------------------------------------
  // Helpers:
  // -------------------------------------------------------------------------

  // Function to help up to test the countdown boxes without repeat ourself:
  const testCountdownBox = (
    wrapper,
    pos,
    value,
    isLeadZero,
    text,
    textSingle = null
  ) => {
    expect(
      wrapper
        .find('WithStyles(Typography)')
        .at(pos)
        .children()
        .text()
    ).toEqual(`${isLeadZero && value < 10 ? '0' : ''}${value}`)
    expect(
      wrapper
        .find('WithStyles(Typography)')
        .at(pos + 1)
        .children()
        .prop('id')
    ).toEqual(value === 1 && textSingle ? textSingle : text)
  }

  // Function to help up to test the countdown boxes without repeat ourself:
  const testCountdownValues = (
    wrapper,
    { years = 0, days = 0, hours = 0, min = 0, sec = 0, isLeadZero = false }
  ) => {
    const dayPos = years ? 2 : 0

    // Check if the number of boxes match the expected:
    expect(wrapper.find('WithStyles(Typography)')).toHaveLength(8 + dayPos)

    // Check if we need to test for the years box:
    if (dayPos) {
      testCountdownBox(
        wrapper,
        0,
        years,
        isLeadZero,
        'app.components.Countdown.years',
        'app.components.Countdown.year'
      )
    } // Endif.

    testCountdownBox(
      wrapper,
      dayPos,
      days,
      isLeadZero,
      'app.components.Countdown.days',
      'app.components.Countdown.day'
    )
    testCountdownBox(
      wrapper,
      dayPos + 2,
      hours,
      isLeadZero,
      'app.components.Countdown.hours'
    )
    testCountdownBox(
      wrapper,
      dayPos + 4,
      min,
      isLeadZero,
      'app.components.Countdown.min'
    )
    testCountdownBox(
      wrapper,
      dayPos + 6,
      sec,
      isLeadZero,
      'app.components.Countdown.sec'
    )
  }

  // -------------------------------------------------------------------------
  // Unit tests:
  // -------------------------------------------------------------------------

  /** @test {Countdown} */
  it('setInterval should be called', () => {
    var curDate = new Date()
    var endDate = new Date(curDate)
    endDate.setSeconds(endDate.getSeconds() + 50)

    const wrapper = shallow(
      <Countdown date={endDate} curDate={curDate} leadZero={true} />
    ).instance()

    jest.advanceTimersByTime(1000)

    wrapper.componentWillUnmount()

    expect(setInterval).toHaveBeenCalledTimes(1)
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000)
    expect(clearInterval).toHaveBeenCalledTimes(1)
  })

  /** @test {Countdown} */
  it('setInterval should not be called if the dates are equal', () => {
    var curDate = new Date()

    const wrapper = shallow(
      <Countdown date={curDate} curDate={curDate} leadZero={true} />
    ).instance()

    wrapper.stop()

    expect(setInterval).toHaveBeenCalledTimes(1)
    expect(clearInterval).toHaveBeenCalledTimes(1)
  })

  /** @test {Countdown} */
  it('should render alternative component if the countdown is finished', () => {
    var curDate = new Date()

    const wrapper = shallow(
      <Countdown
        date={curDate}
        curDate={curDate}
        leadZero={true}
        finished={<div id="test" />}
      />
    )
    expect(wrapper.html()).toEqual('<div id="test"></div>')
  })

  /** @test {Countdown} */
  it('#calculateCountdown() should parse the countdown values', () => {
    var curDate = new Date('Jan 1, 2019 00:00:00')
    var endDate = new Date(curDate)
    endDate.setFullYear(endDate.getFullYear() + 1)
    endDate.setDate(endDate.getDate() + 11)
    endDate.setHours(endDate.getHours() + 10)
    endDate.setMinutes(endDate.getMinutes() + 9)
    endDate.setSeconds(endDate.getSeconds() + 8)

    const wrapper = shallow(<Countdown date={endDate} curDate={curDate} />)
    const res = wrapper.instance().calculateCountdown(endDate, curDate)
    expect(res.isTimeLeft).toEqual(true)
    expect(res.years).toEqual(1)
    expect(res.days).toEqual(11)
    expect(res.hours).toEqual(10)
    expect(res.min).toEqual(9)
    expect(res.sec).toEqual(8)
  })

  /** @test {Countdown} */
  it('#calculateCountdown() should detect same date', () => {
    var curDate = new Date('Jan 1, 2019 00:00:00')

    const wrapper = shallow(<Countdown date={curDate} curDate={curDate} />)
    const res = wrapper.instance().calculateCountdown(curDate, curDate)
    expect(res.isTimeLeft).toEqual(false)
    expect(res.years).toEqual(0)
    expect(res.days).toEqual(0)
    expect(res.hours).toEqual(0)
    expect(res.min).toEqual(0)
    expect(res.sec).toEqual(0)
  })

  /** @test {Countdown} */
  it('#prepareNumberToDisplay() should add extra 0 for numbers below 10', () => {
    var curDate = new Date()
    var endDate = new Date(curDate)

    const wrapper = shallow(
      <Countdown date={endDate} curDate={curDate} leadZero={true} />
    )
    expect(wrapper.instance().prepareNumberToDisplay(9)).toEqual('09')
  })

  /** @test {Countdown} */
  it('#prepareNumberToDisplay() should not add extra 0 for numbers below 10', () => {
    var curDate = new Date()
    var endDate = new Date(curDate)

    const wrapper = shallow(<Countdown date={endDate} curDate={curDate} />)
    expect(wrapper.instance().prepareNumberToDisplay(9)).toEqual('9')
  })

  /** @test {Countdown} */
  it('#prepareNumberToDisplay() should add extra 0 for numbers above 9', () => {
    var curDate = new Date()
    var endDate = new Date(curDate)

    const wrapper = shallow(
      <Countdown date={endDate} curDate={curDate} leadZero={true} />
    )
    expect(wrapper.instance().prepareNumberToDisplay(15)).toEqual('15')
  })

  // -------------------------------------------------------------------------
  // Component tests:
  // -------------------------------------------------------------------------

  /** @test {Countdown} */
  it('should match snapshoot', () => {
    var curDate = new Date()
    var endDate = new Date(curDate)

    const wrapper = shallow(<Countdown date={endDate} curDate={curDate} />)
    expect(wrapper).toMatchSnapshot()
  })

  /** @test {Countdown} */
  it('should render countdown with all 0', () => {
    var curDate = new Date()
    var endDate = new Date(curDate)

    const wrapper = shallow(<Countdown date={endDate} curDate={curDate} />)
    testCountdownValues(wrapper, {})
  })

  /** @test {Countdown} */
  it('should render countdown with all 00', () => {
    var curDate = new Date()
    var endDate = new Date(curDate)

    const wrapper = shallow(
      <Countdown date={endDate} curDate={curDate} leadZero={true} />
    )
    testCountdownValues(wrapper, { isLeadZero: true })
  })

  /** @test {Countdown} */
  it('should render countdown with all 11 and leadZero=true', () => {
    var curDate = new Date('Jan 1, 2019 00:00:00')
    var endDate = new Date(curDate)
    endDate.setDate(endDate.getDate() + 11)
    endDate.setHours(endDate.getHours() + 11)
    endDate.setMinutes(endDate.getMinutes() + 11)
    endDate.setSeconds(endDate.getSeconds() + 11)

    const wrapper = shallow(
      <Countdown date={endDate} curDate={curDate} leadZero={true} />
    )
    testCountdownValues(wrapper, {
      days: 11,
      hours: 11,
      min: 11,
      sec: 11,
      isLeadZero: true
    })
  })

  /** @test {Countdown} */
  it('should render countdown for 2 days, 3 hours, 4 minutes, 5 seconds', () => {
    var curDate = new Date('Jan 1, 2019 00:00:00')
    var endDate = new Date(curDate)
    endDate.setDate(endDate.getDate() + 2)
    endDate.setHours(endDate.getHours() + 3)
    endDate.setMinutes(endDate.getMinutes() + 4)
    endDate.setSeconds(endDate.getSeconds() + 5)

    const wrapper = shallow(<Countdown date={endDate} curDate={curDate} />)
    testCountdownValues(wrapper, { days: 2, hours: 3, min: 4, sec: 5 })
  })

  /** @test {Countdown} */
  it('should render countdown for 1 day, 3 hours, 4 minutes, 5 seconds', () => {
    var curDate = new Date('Jan 1, 2019 00:00:00')
    var endDate = new Date(curDate)
    endDate.setDate(endDate.getDate() + 1)
    endDate.setHours(endDate.getHours() + 3)
    endDate.setMinutes(endDate.getMinutes() + 4)
    endDate.setSeconds(endDate.getSeconds() + 5)

    const wrapper = shallow(<Countdown date={endDate} curDate={curDate} />)
    testCountdownValues(wrapper, { days: 1, hours: 3, min: 4, sec: 5 })
  })

  /** @test {Countdown} */
  it('should render countdown for 2 years, 2 days, 3 hours, 4 minutes, 5 seconds', () => {
    var curDate = new Date('Jan 1, 2019 00:00:00')
    var endDate = new Date(curDate)
    endDate.setFullYear(endDate.getFullYear() + 2)
    endDate.setDate(endDate.getDate() + 2)
    endDate.setHours(endDate.getHours() + 6)
    endDate.setMinutes(endDate.getMinutes() + 4)
    endDate.setSeconds(endDate.getSeconds() + 5)

    const wrapper = shallow(<Countdown date={endDate} curDate={curDate} />)
    // Note: There's one extra day in 2020 so we'll check with days = 3:
    testCountdownValues(wrapper, {
      years: 2,
      days: 3,
      hours: 6,
      min: 4,
      sec: 5
    })
  })

  /** @test {Countdown} */
  it('should render countdown for 1 year, 1 day, 3 hours, 4 minutes, 5 seconds', () => {
    var curDate = new Date('Jan 1, 2019 00:00:00')
    var endDate = new Date(curDate)
    endDate.setFullYear(endDate.getFullYear() + 1)
    endDate.setDate(endDate.getDate() + 1)
    endDate.setHours(endDate.getHours() + 3)
    endDate.setMinutes(endDate.getMinutes() + 4)
    endDate.setSeconds(endDate.getSeconds() + 5)

    const wrapper = shallow(<Countdown date={endDate} curDate={curDate} />)
    testCountdownValues(wrapper, {
      years: 1,
      days: 1,
      hours: 3,
      min: 4,
      sec: 5
    })
  })
})
