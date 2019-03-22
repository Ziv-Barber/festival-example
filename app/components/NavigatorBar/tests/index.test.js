// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'
import { BrowserRouter as Router } from 'react-router-dom'

import NavigatorBar from '../index'
import withRoot from '../../../utils/withRoot'

// For flow:
let { describe, it, afterEach, expect } = global

const TestComp = (prop) => (
  <Router>
    <NavigatorBar />
  </Router>
)

/** @test {NavigatorBar} */
describe('<NavigatorBar />', () => {
  afterEach(() => {
    cleanup()
  })

  /** @test {NavigatorBar} */
  it('should render', () => {
    const App = withRoot(TestComp)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
