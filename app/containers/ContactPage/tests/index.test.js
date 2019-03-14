// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'
import { BrowserRouter as Router } from 'react-router-dom'

import ContactPage from '../index'
import withRoot from '../../../utils/withRoot'
import { IntlProvider } from 'react-intl'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {ContactPage} */
describe('<ContactPage />', () => {
  afterEach(cleanup)

  /** @test {ContactPage} */
  it('should render', () => {
    const TestComp = (prop) => (
      <IntlProvider locale="en">
        <Router>
          <ContactPage />
        </Router>
      </IntlProvider>
    )

    const App = withRoot(TestComp)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
