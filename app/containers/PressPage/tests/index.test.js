// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'
import { BrowserRouter as Router } from 'react-router-dom'

import PressPage from '../index'
import withRoot from '../../../utils/withRoot'
import { IntlProvider } from 'react-intl'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {PressPage} */
describe('<PressPage />', () => {
  afterEach(cleanup)

  /** @test {PressPage} */
  it('should render', () => {
    const TestComp = (prop) => (
      <IntlProvider locale="en">
        <Router>
          <PressPage />
        </Router>
      </IntlProvider>
    )

    const App = withRoot(TestComp)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
