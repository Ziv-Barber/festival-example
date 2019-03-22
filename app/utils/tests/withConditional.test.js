// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import withConditional from '../withConditional'

// For flow:
let { describe, it, afterEach, expect } = global

const TestComponent = () => <span>Example component</span>

/** @test {withConditional} */
describe('<withConditional />', () => {
  afterEach(cleanup)

  /** @test {withConditional} */
  it('should match snapshort', () => {
    const App = withConditional(TestComponent)
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

  /** @test {withConditional} */
  it('should render the component only when the condition passes', () => {
    const App = withConditional(TestComponent)
    const { getByText } = render(<App condition={true} />)
    expect(getByText(/^Example component/)).not.toBeNull()
  })

  /** @test {withConditional} */
  it('should return null when the condition fails', () => {
    const App = withConditional(TestComponent)
    const { queryByText } = render(<App condition={false} />)
    expect(queryByText(/^Example component/)).toBeNull()
  })
})
