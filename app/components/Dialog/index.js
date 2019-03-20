// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

// Other components that we need:

// Material-ui stuff:
import MuiPaper from '@material-ui/core/Paper'
import MuiDialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogContentText from '@material-ui/core/DialogContentText'
import MuiDialogActions from '@material-ui/core/DialogActions'
import MuiSlide from '@material-ui/core/Slide'
import MuiButton from '@material-ui/core/Button'

import type MuiDialogTitleType from '@material-ui/core/DialogTitle/DialogTitle'

// Our types:
import type { DialogPropsType, DialogTitlePropsType } from './index.types'

const Transition = (props) => <MuiSlide direction="up" {...props} />

/**
 * Dialog react component.
 * @reactProps {string} text Parameters for the component.
 * @return New element.
 */
const Dialog = (props: DialogPropsType) => {
  const { onClose, titleImage, ...other } = props

  const handleClose = () => {
    onClose()
  }

  const DialogPaper = styled(MuiPaper)`
    width: 90vh;
    min-height: 50vh;
    background: ${(props) => props.theme.palette.primary.main} !important;

    & .popupContent {
      background: ${(props) => props.theme.palette.background.default};
    }

    @media (min-width: 600px) {
      & .textInput {
        width: 580px;
      }
    }
  `

  const DialogTitle = (props: MuiDialogTitleType & DialogTitlePropsType) => {
    const { titleImage, children, ...other } = props

    return <MuiDialogTitle {...other}>{children}</MuiDialogTitle>
  }

  const StyledDialogTitle = styled(DialogTitle)`
    position: relative;
    z-index: 2;

    & :before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: url(${(props) => props.titleImage});
      background-size: cover;
      filter: grayscale(50%) blur(3px) opacity(0.4);
      z-index: -1;
    }
  `

  return (
    <MuiDialog
      onClose={handleClose}
      className={props.className || 'popup'}
      PaperComponent={DialogPaper}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="popup-dialog-title"
      aria-describedby="popup-dialog-description"
      {...other}
    >
      <StyledDialogTitle id="popup-dialog-title" titleImage={props.titleImage}>
        {props.title}
      </StyledDialogTitle>
      <MuiDialogContent className="popupContent">
        <MuiDialogContentText
          className="popupTitle"
          id="popup-dialog-description"
        >
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

export default styled(Dialog)``

// In case that someone need our types:
export type { DialogPropsType as Props }
