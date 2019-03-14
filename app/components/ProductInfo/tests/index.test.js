// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import ProductInfo from '../index'
import withRoot from '../../../utils/withRoot'
import { IntlProvider } from 'react-intl'

// For flow:
let { describe, it, afterEach, expect } = global

const RealDate = global.Date

/** @test {Info} */
describe('<ProductInfo />', () => {
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
        <ProductInfo text="This is a test" date={new RealDate('2020-05-01')} />
      </IntlProvider>
    )

    const App = withRoot(TestComp)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
