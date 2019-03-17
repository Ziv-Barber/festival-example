// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

// Material-ui stuff:
import MuiTypography from '@material-ui/core/Typography'

// Our types:
import type { BigTextPropsType } from './index.types'

/**
 * BigText react component.
 * @reactProps {string} text Parameters for the component.
 * @return New element.
 */
const BigText = (props: BigTextPropsType) => (
  <MuiTypography
    className={props.className || 'bigText'}
    variant="h5"
    component="h2"
  >
    {props.children}
  </MuiTypography>
)

export default styled(BigText)`
  position: relative;
  margin: ${(props) => props.theme.spacing.unit}px !important;
  padding: ${(props) => props.theme.spacing.unit * 2}px !important;
  border-radius: ${(props) => props.theme.spacing.unit * 2}px !important;
  background: ${(props) => props.theme.palette.primary.main};
  color: #fff;

  & ::after {
    content: '';
    position: absolute;
    top: -96px;
    right: 0;
    width: 0;
    height: 0;
    border-bottom: 96px solid
      ${(props) => props.theme.palette.background.default};
    border-right: 100vw solid transparent;
    z-index: 1;
  }
`

// In case that someone need our types:
export type { BigTextPropsType as Props }
