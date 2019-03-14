// @flow

import React from 'react' // eslint-disable-line no-unused-vars

// Other components that we need:

// Internationalization (i18n):
// import { FormattedMessage } from 'react-intl'
// import createMessages from './messages'

// Material-ui stuff:
import MuiDialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogContentText from '@material-ui/core/DialogContentText'
import MuiDialogActions from '@material-ui/core/DialogActions'
import MuiSlide from '@material-ui/core/Slide'
import MuiButton from '@material-ui/core/Button'

// Our types:
import type { DialogPropsType } from './index.types'

const Transition = (props) => <MuiSlide direction="up" {...props} />

/**
 * Dialog react component.
 * @reactProps {string} text Parameters for the component.
 * @return New element.
 */
const Dialog = (props: DialogPropsType) => {
  const { onClose, ...other } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <MuiDialog
      onClose={handleClose}
      className={props.className || 'popup'}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="popup-dialog-title"
      aria-describedby="popup-dialog-description"
      {...other}
    >
      <MuiDialogTitle id="popup-dialog-title">{props.title}</MuiDialogTitle>
      <MuiDialogContent>
        <MuiDialogContentText id="popup-dialog-description">
          {props.children}
        </MuiDialogContentText>
      </MuiDialogContent>
      <MuiDialogActions>
        <MuiButton onClick={handleClose} color="primary">
          OK
        </MuiButton>
      </MuiDialogActions>
    </MuiDialog>
  )
}

export default Dialog

// In case that someone need our types:
export type { DialogPropsType as Props }
