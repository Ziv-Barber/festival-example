// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import Travel from '../index'
import withRoot from '../../../utils/withRoot'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {Travel} */
describe('<Travel />', () => {
  afterEach(cleanup)

  /** @test {Travel} */
  it('should render', () => {
    const App = withRoot(Travel)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
