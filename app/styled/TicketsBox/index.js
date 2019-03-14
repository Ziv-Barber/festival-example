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
import MuiButton from '@material-ui/core/Button'

// Our types:
import type { TicketsBoxPropsType } from './index.types'

/**
 * TicketsBox react component.
 * @reactProps {string} text Parameters for the component.
 * @return New element.
 */
const TicketsBox = (props: TicketsBoxPropsType) => (
  <MuiCard elevation={0} square={true} className={props.className || 'card'}>
    <MuiCardContent className="cardContent">
      <MuiTypography variant="h6" component="h2">
        {props.name} <strong>{props.price}</strong>
      </MuiTypography>
    </MuiCardContent>
    <MuiCardActions className="cardActions">
      <img src={props.image} className="cardImage" />
      <MuiTypography variant="body1" className="cardDesc">
        {props.desc}
      </MuiTypography>
      <div className="cardButton">
        <MuiButton variant="contained" color="primary">
          Buy now!
        </MuiButton>
      </div>
    </MuiCardActions>
  </MuiCard>
)

export default TicketsBox

// In case that someone need our types:
export type { TicketsBoxPropsType as Props }
