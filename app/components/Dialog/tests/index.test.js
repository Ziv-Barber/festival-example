// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import Dialog from '../index'

// For flow:
let { describe, it, afterEach, expect } = global

const handleClose = () => {}

/** @test {Dialog} */
describe('<Dialog />', () => {
  afterEach(cleanup)

  /** @test {Dialog} */
  it('should match snapshort', () => {
    const { container } = render(
      <Dialog open={true} onClose={handleClose} title="My Dialog" />
    )
    expect(container).toMatchSnapshot()
  })

  /** @test {Dialog} */
  it('should render', () => {
    const { getByText } = render(
      <Dialog open={true} onClose={handleClose} title="My Dialog" />
    )
    expect(getByText(/^My Dialog/)).not.toBeNull()
  })
})
