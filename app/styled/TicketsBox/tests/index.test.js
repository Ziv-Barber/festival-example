// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import TicketsBox from '../index'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {TicketsBox} */
describe('<TicketsBox />', () => {
  afterEach(cleanup)

  /** @test {TicketsBox} */
  it('should render', () => {
    const { getByText } = render(
      <TicketsBox
        name="Normal ticket"
        image="http://example.com/1.png"
        price={50}
        desc="Just a normal ticket."
      />
    )
    expect(getByText(/^Normal ticket/)).not.toBeNull()
  })
})
