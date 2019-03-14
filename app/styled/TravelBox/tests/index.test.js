// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import TravelBox from '../index'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {TravelBox} */
describe('<TravelBox />', () => {
  afterEach(cleanup)

  /** @test {TravelBox} */
  it('should render', () => {
    const { getByText } = render(
      <TravelBox name="bus" image="http://example.com/logo.png" options={{}} />
    )
    expect(getByText(/bus/)).not.toBeNull()
  })
})
