// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import PartnerBox from '../index'
import withRoot from '../../../utils/withRoot'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {PartnerBox} */
describe('<PartnerBox />', () => {
  afterEach(cleanup)

  /** @test {PartnerBox} */
  it('should render', () => {
    const CompToTest = () => (
      <PartnerBox name="My brand" logo="http://www.example.com/logo.jpg" />
    )

    const App = withRoot(CompToTest)
    const { getByText } = render(<App />)
    expect(getByText(/^My brand/)).not.toBeNull()
  })
})
