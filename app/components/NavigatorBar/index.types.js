// @flow

import * as React from 'react' // eslint-disable-line no-unused-vars
import type MuiMenuType from '@material-ui/core/Menu/Menu'

export type NavigatorBarPropsType = {
  history: {
    push: (string) => void
  },
  className?: string,
  menuComp?: React.ComponentType<MuiMenuType>
}
