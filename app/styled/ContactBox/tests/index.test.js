// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import ContactBox from '../index'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {ContactBox} */
describe('<ContactBox />', () => {
  afterEach(cleanup)

  /** @test {ContactBox} */
  it('should match snapshort', () => {
    const { container } = render(<ContactBox text="This is a text" />)
    expect(container).toMatchSnapshot()
  })

  /** @test {ContactBox} */
  it('should render', () => {
    const { getByText } = render(<ContactBox text="This is a text" />)
    expect(getByText(/^This is a text/)).not.toBeNull()
  })
})
