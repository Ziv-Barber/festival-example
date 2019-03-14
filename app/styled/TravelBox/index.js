// @flow

import React from 'react' // eslint-disable-line no-unused-vars

// Other components that we need:
import Dialog from '../../components/Dialog'

// Internationalization (i18n):
// import { FormattedMessage } from 'react-intl'
// import createMessages from './messages'

// Material-ui stuff:
import MuiCard from '@material-ui/core/Card'
import MuiCardActions from '@material-ui/core/CardActions'
import MuiCardContent from '@material-ui/core/CardContent'
import MuiTypography from '@material-ui/core/Typography'
import MuiFab from '@material-ui/core/Fab'
import InfoIcon from '@material-ui/icons/Info'

// Our types:
import type { TravelBoxPropsType } from './index.types'

/**
 * TravelBox react component.
 * @reactProps {string} text Parameters for the component.
 * @return New element.
 */
const TravelBox = (props: TravelBoxPropsType) => {
  const [open, setOpen] = React.useState(false)

  /**
   * Handler for opening the dialog.
   */
  const handleClickOpen = () => {
    setOpen(true)
  }

  /**
   * Handler to use as a parameter to the dialog component to be able to close the dialog.
   */
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <MuiCard elevation={0} square={true} className={props.className || 'card'}>
      <MuiCardContent className="cardContent">
        <MuiTypography variant="h6" component="h2">
          By {props.name}
        </MuiTypography>
      </MuiCardContent>
      <MuiCardActions className="cardActions">
        <div>
          <img src={props.image} className="cardImage" />
          <div className="cardInfo">
            <MuiFab color="primary" onClick={handleClickOpen}>
              <InfoIcon />
            </MuiFab>
          </div>
        </div>
      </MuiCardActions>
      <Dialog
        open={open}
        onClose={handleClose}
        title={`By ${props.name}`}
        text="Test"
      />
    </MuiCard>
  )
}

export default TravelBox

// In case that someone need our types:
export type { TravelBoxPropsType as Props }
