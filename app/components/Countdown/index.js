// @flow

import React from 'react' // eslint-disable-line no-unused-vars

// Internationalization (i18n):
import { FormattedMessage } from 'react-intl'
import messages from './messages'

// Material-ui stuff:
import MuiPaper from '@material-ui/core/Paper'
import MuiTypography from '@material-ui/core/Typography'

// Our types:
import type { CountdownPropsType, CountdownStateType } from './index.types'

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
class Countdown extends React.PureComponent<
  CountdownPropsType,
  CountdownStateType
> {
  interval: IntervalID | null

  constructor(props: CountdownPropsType) {
    super(props)

    this.interval = null

    // Calculate the first countdown status:
    this.state = this.calculateCountdown(props.date, props.curDate)
  }

  /**
   * Mount this component.
   */
  componentDidMount() {
    // We'll update the countdown every second:
    if (this.state.isTimeLeft) {
      this.interval = setInterval(() => {
        const date = this.calculateCountdown(this.props.date)

        date.isTimeLeft ? this.setState(date) : this.stop()
      }, 1000)
    } // Endif.
  }

  /**
   * Unmount this component.
   */
  componentWillUnmount() {
    // Destroy the timer:
    this.stop()
  }

  render() {
    const countDown = this.state
    const { classes, className, finished } = this.props

    // Option to display something else when the timer is over:
    if (!countDown.isTimeLeft && finished) {
      return finished
    } // Endif.

    return (
      <MuiPaper className={className || classes.root}>
        {countDown.years > 0 ? (
          <MuiPaper className={classes.box}>
            <MuiTypography className={classes.value}>
              {this.prepareNumberToDisplay(countDown.years)}
            </MuiTypography>
            <MuiTypography className={classes.text}>
              {countDown.years === 1 ? (
                <FormattedMessage {...messages.year} />
              ) : (
                <FormattedMessage {...messages.years} />
              )}
            </MuiTypography>
          </MuiPaper>
        ) : null}

        <MuiPaper className={classes.box}>
          <MuiTypography className={classes.value}>
            {this.prepareNumberToDisplay(countDown.days)}
          </MuiTypography>
          <MuiTypography className={classes.text}>
            {countDown.days === 1 ? (
              <FormattedMessage {...messages.day} />
            ) : (
              <FormattedMessage {...messages.days} />
            )}
          </MuiTypography>
        </MuiPaper>

        <MuiPaper className={classes.box}>
          <MuiTypography className={classes.value}>
            {this.prepareNumberToDisplay(countDown.hours)}
          </MuiTypography>
          <MuiTypography className={classes.text}>
            <FormattedMessage {...messages.hours} />
          </MuiTypography>
        </MuiPaper>

        <MuiPaper className={classes.box}>
          <MuiTypography className={classes.value}>
            {this.prepareNumberToDisplay(countDown.min)}
          </MuiTypography>
          <MuiTypography className={classes.text}>
            <FormattedMessage {...messages.min} />
          </MuiTypography>
        </MuiPaper>

        <MuiPaper className={classes.box}>
          <MuiTypography className={classes.value}>
            {this.prepareNumberToDisplay(countDown.sec)}
          </MuiTypography>
          <MuiTypography className={classes.text}>
            <FormattedMessage {...messages.sec} />
          </MuiTypography>
        </MuiPaper>
      </MuiPaper>
    )
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    } // Endif.
  }

  /**
   * Calculate the counter's values.
   * @param {Date} endDate The end date of the counter.
   */
  calculateCountdown(
    endDate: Date,
    curDate: Date | null = null
  ): CountdownStateType {
    let timeDiff =
      (new Date(endDate) - (curDate ? new Date(curDate) : new Date())) / 1000

    // The default state:
    const timeLeft = {
      isTimeLeft: false,
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }

    // Clear countdown when date is reached:
    if (timeDiff <= 0) {
      return timeLeft
    } // Endif.

    // We do need a countdown:
    timeLeft.isTimeLeft = true

    // Calculate time time difference between now and expected date:

    const yearVal = 365 * 24 * 60 * 60
    if (timeDiff >= yearVal) {
      timeLeft.years = Math.floor(timeDiff / yearVal)
      timeDiff -= timeLeft.years * yearVal
    } // Endif.

    const dayVal = 24 * 60 * 60
    if (timeDiff >= dayVal) {
      timeLeft.days = Math.floor(timeDiff / dayVal)
      timeDiff -= timeLeft.days * dayVal
    } // Endif.

    const hourVal = 60 * 60
    if (timeDiff >= hourVal) {
      timeLeft.hours = Math.floor(timeDiff / hourVal)
      timeDiff -= timeLeft.hours * hourVal
    } // Endif.

    if (timeDiff >= 60) {
      timeLeft.min = Math.floor(timeDiff / 60)
      timeDiff -= timeLeft.min * 60
    } // Endif.

    timeLeft.sec = Math.floor(timeDiff)

    return timeLeft
  }

  prepareNumberToDisplay(valueIn: number): string {
    let value = String(valueIn || 0)

    if (this.props.leadZero && value.length < 2) {
      value = `0${value}`
    } // Endif.

    return value
  }

  static defaultProps = {
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
  }
}

export default Countdown
