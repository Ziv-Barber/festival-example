// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import Lineup from '../index'
import withRoot from '../../../utils/withRoot'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {Lineup} */
describe('<Lineup />', () => {
  afterEach(cleanup)

  /** @test {Lineup} */
  it('should work', () => {
    const App = withRoot(Lineup)
    const { comtainer } = render(<App />)
    expect(comtainer).toMatchSnapshot()
  })
})
