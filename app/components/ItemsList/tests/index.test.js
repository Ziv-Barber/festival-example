// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'

import ItemsList from '../index'

// For flow:
let { describe, it, afterEach, expect } = global

type testProps = {
  text: string
}

const items = [
  {
    key: '1',
    component: () => <span>Item 1</span>
  },
  {
    key: '2',
    component: (props: testProps) => <span>Item {props.text}</span>,
    compProps: { text: '2' }
  }
]

/** @test { ItemsList } */
describe('<ItemsList />', () => {
  afterEach(cleanup)

  /** @test { ItemsList } */
  it('Should work', () => {
    const { getByText } = render(<ItemsList items={items} />)
    expect(getByText(/^Item 1/)).not.toBeNull()
    expect(getByText(/^Item 2/)).not.toBeNull()
  })

  /** @test { ItemsList } */
  it('Should render header', () => {
    const { getByText } = render(
      <ItemsList items={items} caption="The Header" />
    )
    expect(getByText(/^The Header/)).not.toBeNull()
    expect(getByText(/^Item 1/)).not.toBeNull()
    expect(getByText(/^Item 2/)).not.toBeNull()
  })
})
