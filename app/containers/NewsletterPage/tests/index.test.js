// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'
import { BrowserRouter as Router } from 'react-router-dom'

import NewsletterPage from '../index'
import withRoot from '../../../utils/withRoot'
import { IntlProvider } from 'react-intl'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {NewsletterPage} */
describe('<NewsletterPage />', () => {
  afterEach(cleanup)

  /** @test {NewsletterPage} */
  it('should render', () => {
    const TestComp = (prop) => (
      <IntlProvider locale="en">
        <Router>
          <NewsletterPage />
        </Router>
      </IntlProvider>
    )

    const App = withRoot(TestComp)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
