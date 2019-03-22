// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'
import { BrowserRouter as Router } from 'react-router-dom'

import Footer from '../index'
import withRoot from '../../../utils/withRoot'

// For flow:
let { describe, it, afterEach, expect } = global

const TestComp = (prop) => (
  <Router>
    <Footer />
  </Router>
)

/** @test {Footer} */
describe('<Footer />', () => {
  afterEach(cleanup)

  /** @test {Footer} */
  it('should render', () => {
    const App = withRoot(TestComp)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
