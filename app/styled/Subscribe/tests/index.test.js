// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import Subscribe from '../index'
import withRoot from '../../../utils/withRoot'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {Subscribe} */
describe('<Subscribe />', () => {
  afterEach(cleanup)

  /** @test {Subscribe} */
  it('should match snapshort', () => {
    const App = withRoot(Subscribe)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
