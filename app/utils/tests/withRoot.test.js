// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { render, cleanup } from 'react-testing-library'
import { withTheme } from 'styled-components'
import type { Theme } from '@material-ui/core/styles/createMuiTheme'

import withRoot from '../withRoot'

// For flow:
let { describe, it, afterEach, expect } = global

/** @test {withRoot} */
describe('withRoot()', () => {
  afterEach(cleanup)

  /** @test {withRoot} */
  it('should render', () => {
    const App = (props: Theme) => <span>{props.theme.spacing.unit}</span>
    const StyledApp = withRoot(withTheme(App))
    const { getByText } = render(<StyledApp />)
    expect(getByText(/^8/)).not.toBeNull()
    expect(StyledApp.displayName).toEqual('withRoot(WithTheme(App))')
  })

  /** @test {withRoot} */
  it('should have the right displayName for function', () => {
    const App = (props) => <span>123</span>
    const StyledApp = withRoot(App)
    const { getByText } = render(<StyledApp />)
    expect(getByText(/^123/)).not.toBeNull()
    expect(StyledApp.displayName).toEqual('withRoot(App)')
  })
})
