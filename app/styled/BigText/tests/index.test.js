// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import BigText from '../index'
import withRoot from '../../../utils/withRoot'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {BigText} */
describe('<BigText />', () => {
  afterEach(cleanup)

  /** @test {BigText} */
  it('should match snapshort', () => {
    const CompToTest = () => <BigText>This is a text</BigText>
    const App = withRoot(CompToTest)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

  /** @test {BigText} */
  it('should render', () => {
    const CompToTest = () => <BigText>This is a text</BigText>
    const App = withRoot(CompToTest)
    const { getByText } = render(<App />)
    expect(getByText(/^This is a text/)).not.toBeNull()
  })
})
