// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import Dialog from '../index'
import withRoot from '../../../utils/withRoot'

// For flow:
let { describe, it, afterEach, expect } = global

const handleClose = () => {}

const TestedComp = () => (
  <Dialog
    open={true}
    onClose={handleClose}
    title="My Dialog"
    titleImage="http://example.com/back.png"
  />
)
const App = withRoot(TestedComp)

/** @test {Dialog} */
describe('<Dialog />', () => {
  afterEach(cleanup)

  /** @test {Dialog} */
  it('should match snapshort', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

  /** @test {Dialog} */
  it('should render', () => {
    const { getByText } = render(<App />)
    expect(getByText(/^My Dialog/)).not.toBeNull()
  })
})
