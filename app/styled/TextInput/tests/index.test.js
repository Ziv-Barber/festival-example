// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import TextInput from '../index'
import withRoot from '../../../utils/withRoot'

// For flow:
let { describe, it, afterEach, expect } = global

const CompToTest = () => (
  <TextInput id="test_field" label="Name" value="This is a test" />
)

/** @test {TextInput} */
describe('<TextInput />', () => {
  afterEach(cleanup)

  /** @test {TextInput} */
  it('should match snapshort', () => {
    const App = withRoot(CompToTest)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

  /** @test {TextInput} */
  it('should render', () => {
    const App = withRoot(CompToTest)
    render(<App />)
    // const { getByText } = render(<App />)
    // expect(getByText(/^This is a text/)).not.toBeNull()
  })
})
