// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import Info from '../index'
import withRoot from '../../../utils/withRoot'
import { IntlProvider } from 'react-intl'

// For flow:
let { describe, it, afterEach, expect } = global

const RealDate = global.Date

/** @test {Info} */
describe('<Info />', () => {
  afterEach(() => {
    global.Date = RealDate
    cleanup()
  })

  /** @test {Info} */
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
        <Info />
      </IntlProvider>
    )

    const App = withRoot(TestComp)
    const { container } = render(<App />)
    // console.log(debug())
    expect(container).toMatchSnapshot()
  })
})
