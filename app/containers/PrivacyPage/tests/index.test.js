// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'
import { BrowserRouter as Router } from 'react-router-dom'

import PrivacyPage from '../index'
import withRoot from '../../../utils/withRoot'
import { IntlProvider } from 'react-intl'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {PrivacyPage} */
describe('<PrivacyPage />', () => {
  afterEach(cleanup)

  /** @test {PrivacyPage} */
  it('should render', () => {
    const TestComp = (prop) => (
      <IntlProvider locale="en">
        <Router>
          <PrivacyPage />
        </Router>
      </IntlProvider>
    )

    const App = withRoot(TestComp)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
