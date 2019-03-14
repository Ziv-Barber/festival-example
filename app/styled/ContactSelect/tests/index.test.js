// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import ContactSelect from '../index'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {ContactSelect} */
describe('<ContactSelect />', () => {
  afterEach(cleanup)

  /** @test {ContactSelect} */
  it('should match snapshort', () => {
    const { container } = render(<ContactSelect text="This is a text" />)
    expect(container).toMatchSnapshot()
  })

  /** @test {ContactSelect} */
  it('should render', () => {
    const { getByText } = render(<ContactSelect text="This is a text" />)
    expect(getByText(/^This is a text/)).not.toBeNull()
  })
})
