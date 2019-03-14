// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

// Material-ui stuff:
import MuiTypography from '@material-ui/core/Typography'

// Our types:
import type { PrivacyTextPropsType } from './index.types'

/**
 * PrivacyText react component.
 * @reactProps {string} text Parameters for the component.
 * @return New element.
 */
const PrivacyText = (props: PrivacyTextPropsType) => (
  <MuiTypography
    className={props.className || 'privacyText'}
    variant="h5"
    component="h2"
  >
    {props.children}
  </MuiTypography>
)

export default styled(PrivacyText)`
  margin: 0 !important;
  padding: ${(props) => props.theme.spacing.unit * 2}px !important;
  background: ${(props) => props.theme.palette.secondary.dark};
`

// In case that someone need our types:
export type { PrivacyTextPropsType as Props }
