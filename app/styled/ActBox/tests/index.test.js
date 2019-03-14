// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import ActBox from '../index'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {ActBox} */
describe('<ActBox />', () => {
  afterEach(cleanup)

  /** @test {ActBox} */
  it('should render', () => {
    const { container } = render(
      <ActBox name="This is a text" image="http://test.com/test.jpg" />
    )
    expect(container).toMatchSnapshot()
  })
})
