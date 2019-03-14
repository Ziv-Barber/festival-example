// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

// Our types:
import type { ActBoxPropsType } from './index.types'

// import IconButton from '@material-ui/core/IconButton'
// import InfoIcon from '@material-ui/icons/Info'
// import Dialog from '@material-ui/core/Dialog'
// import DialogTitle from '@material-ui/core/DialogTitle'
// <IconButton className={classes.icon}>
// clear
// forward
// <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" {...other}>
// <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>

/**
 * Control to display a single act.
 *
 * @param {ActBoxPropsType} props The properties.
 * @reactProps {string} name - The act's name.
 * @reactProps {string} image - The act's image URL.
 * @reactProps {string} className - optional CSS Class name to use for the main element of the component.
 */
const ActBox = (props: ActBoxPropsType) => (
  <div className={props.className}>
    <div className="actBoxIn">
      <p>{props.name}</p>
    </div>
  </div>
)

export default styled(ActBox)`
  position: relative;
  width: 184px;
  height: 184px;
  border: 2px solid #fff;
  transition: 0.4s ease-in-out;

  & :hover {
    transform: scale(1.1, 1.1);
  }

  & .actBoxIn {
    position: absolute;
    margin: 0;
    height: 180px;
    width: 180px;
    overflow: hidden;
  }

  & .actBoxIn:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-image: url(${(props) => props.image});
    background-size: 180px 180px;
    filter: grayscale(0) blur(0);
    transition: 0.4s ease-in-out;
  }

  & .actBoxIn:hover:before {
    filter: grayscale(100%) blur(3px);
    transition: 0.4s ease-in-out;
  }

  & .actBoxIn p {
    position: absolute;
    top: -50px;
    color: #000;
    background: #ff0;
    border: 1px solid #fff;
  }

  & :hover .actBoxIn p {
    position: absolute;
    display: block;
    margin: 0;
    top: 72px;
    left: -61px;
    width: 160%;
    height: 20px;
    font-size: 16px;
    font-weight: bold;
    z-index: 1060;
    text-align: center;
    transform: rotate(45deg);
    filter: alpha(opacity=100);
    transition: 0.4s ease-in-out;
  }
`

// In case that someone need our types:
export type { ActBoxPropsType as Props }
