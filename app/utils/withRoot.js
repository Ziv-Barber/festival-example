// @flow

import * as React from 'react' // eslint-disable-line no-unused-vars
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'

/**
 * withRoot HOC to wrap a react component with the app's theme provider.
 */
const withRoot = (Component: React.ComponentType<any>) => {
  const withRootBase = (props: any) => (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Component {...props} />
        </React.Fragment>
      </ThemeProvider>
    </MuiThemeProvider>
  )

  // $FlowFixMe
  withRootBase.displayName = `withRoot(${Component.displayName ||
    Component.name})`

  return withRootBase
}

export default withRoot
