// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'
import { BrowserRouter as Router } from 'react-router-dom'

import HomePage from '../index'
import withRoot from '../../../utils/withRoot'
import { IntlProvider } from 'react-intl'

// For flow:
let { describe, it, afterEach, expect } = global

const RealDate = global.Date

/** @test {HomePage} */
describe('<HomePage />', () => {
  afterEach(() => {
    global.Date = RealDate
    cleanup()
  })

  /** @test {HomePage} */
  it('should render', () => {
    // We need to mock the timer for the Countdown component:
    global.Date = class extends Date {
      constructor(reqDate) {
        super(reqDate)
        return reqDate ? this : new RealDate('2019-01-01')
      }
    }

    const TestComp = (prop) => (
      <IntlProvider locale="en">
        <Router>
          <HomePage />
        </Router>
      </IntlProvider>
    )

    const App = withRoot(TestComp)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
