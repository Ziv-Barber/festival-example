// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import PageLogo from '../index'
import withRoot from '../../../utils/withRoot'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {PageLogo} */
describe('<PageLogo />', () => {
  afterEach(cleanup)

  /** @test {PageLogo} */
  it('should match snapshort', () => {
    const CompToTest = () => (
      <PageLogo back="http://example.com/back.jpg">This is a text</PageLogo>
    )
    const App = withRoot(CompToTest)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

  /** @test {PageLogo} */
  it('should render', () => {
    const CompToTest = () => (
      <PageLogo back="http://example.com/back.jpg">This is a text</PageLogo>
    )
    const App = withRoot(CompToTest)
    const { getByText } = render(<App />)
    expect(getByText(/^This is a text/)).not.toBeNull()
  })
})
