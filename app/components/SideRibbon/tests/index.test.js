import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import SideRibbon from '../index'

/** @test {SideRibbon} */
describe('<SideRibbon />', () => {
  afterEach(cleanup)

  /** @test {SideRibbon} */
  it('should render <SideRibbon />', () => {
    const { container } = render(<SideRibbon>Test Ribbon</SideRibbon>)
    expect(container.querySelector('a')).not.toBeNull()
  })

  /** @test {SideRibbon} */
  it('should render <SideRibbon /> with the given children', () => {
    const { getByText } = render(<SideRibbon>Test Ribbon</SideRibbon>)
    expect(getByText(/test ribbon/i)).not.toBeNull()
  })
})
