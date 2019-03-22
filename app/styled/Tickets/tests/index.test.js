// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import Tickets from '../index'
import withRoot from '../../../utils/withRoot'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {Tickets} */
describe('<Tickets />', () => {
  afterEach(cleanup)

  /** @test {Tickets} */
  it('should render', () => {
    const App = withRoot(Tickets)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
