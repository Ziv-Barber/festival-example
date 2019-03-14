// @flow

import React from 'react' // eslint-disable-line no-unused-vars

// Other components that we need:

// Internationalization (i18n):
// import { FormattedMessage } from 'react-intl'
// import createMessages from './messages'

// Material-ui stuff:
// import MuiPaper from '@material-ui/core/Paper'
// import MuiTypography from '@material-ui/core/Typography'
// import MuiGrid from '@material-ui/core/Grid'

// Our types:
import type { ContactBoxPropsType } from './index.types'

/**
 * ContactBox react component.
 * @reactProps {string} text Parameters for the component.
 * @return New element.
 */
const ContactBox = (props: ContactBoxPropsType) => (
  <React.Fragment>
    <span>{props.text}</span>
  </React.Fragment>
)

export default ContactBox

// In case that someone need our types:
export type { ContactBoxPropsType as Props }
