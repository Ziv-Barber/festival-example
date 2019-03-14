// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import PrivacyText from '../index'
import withRoot from '../../../utils/withRoot'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {PrivacyText} */
describe('<PrivacyText />', () => {
  afterEach(cleanup)

  /** @test {PrivacyText} */
  it('should match snapshort', () => {
    const CompToTest = () => <PrivacyText>This is a text</PrivacyText>
    const App = withRoot(CompToTest)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

  /** @test {PrivacyText} */
  it('should render', () => {
    const CompToTest = () => <PrivacyText>This is a text</PrivacyText>
    const App = withRoot(CompToTest)
    const { getByText } = render(<App />)
    expect(getByText(/^This is a text/)).not.toBeNull()
  })
})
