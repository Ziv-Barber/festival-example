// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import TravelBox from '../index'
import withRoot from '../../../utils/withRoot'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {TravelBox} */
describe('<TravelBox />', () => {
  afterEach(cleanup)

  /** @test {TravelBox} */
  it('should render', () => {
    const TestedCode = () => (
      <TravelBox name="bus" image="http://example.com/logo.png" options={{}} />
    )
    const App = withRoot(TestedCode)
    const { getByText } = render(<App />)
    expect(getByText(/bus/)).not.toBeNull()
  })
})
