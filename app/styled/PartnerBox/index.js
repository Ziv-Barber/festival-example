// @flow

import React from 'react' // eslint-disable-line no-unused-vars

// Other components that we need:

// Internationalization (i18n):
// import { FormattedMessage } from 'react-intl'
// import createMessages from './messages'

// Material-ui stuff:
import MuiCard from '@material-ui/core/Card'
import MuiCardActions from '@material-ui/core/CardActions'
import MuiCardContent from '@material-ui/core/CardContent'
import MuiTypography from '@material-ui/core/Typography'

// Our types:
import type { PartnerBoxPropsType } from './index.types'

/**
 * PartnerBox react component.
 * @reactProps {string} name - The name of the brand.
 * @reactProps {string} logo - The logo image URL of the brand.
 */
const PartnerBox = (props: PartnerBoxPropsType) => (
  <MuiCard elevation={0} square={true} className={props.className || 'card'}>
    <MuiCardActions className="cardActions">
      <img src={props.logo} className="cardLogo" />
    </MuiCardActions>
    <MuiCardContent className="cardContent">
      <MuiTypography variant="h5" component="h2">
        {props.name}
      </MuiTypography>
    </MuiCardContent>
  </MuiCard>
)

export default PartnerBox

// In case that someone need our types:
export type { PartnerBoxPropsType as Props }
