// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

// Material-ui stuff:
import MuiPaper from '@material-ui/core/Paper'
import MuiTypography from '@material-ui/core/Typography'

// Our types:
import type { PageLogoPropsType } from './index.types'

/**
 * PageLogo react component.
 * @reactProps {string} className Optional class name for the root element.
 * @reactProps {string} text Parameters for the component.
 * @return New element.
 */
const PageLogo = (props: PageLogoPropsType) => (
  <MuiPaper
    className={props.className || 'pageLogo'}
    elevation={0}
    square={true}
  >
    <MuiTypography className="pageLogoText" variant="h5" component="h2">
      {props.children}
    </MuiTypography>
  </MuiPaper>
)

export default styled(PageLogo)`
  margin: 0 !important;
  min-height: 60vh;
  background-size: cover;
  background-position: center bottom;
  background-image: url(${(props) => props.back});
  display: flex;
  justify-content: center;
  align-items: center;

  & .pageLogoText {
    padding: ${(props) => props.theme.spacing.unit * 4}px !important;
    background: ${(props) => props.theme.palette.secondary.main};
    border: 1px solid #fff;
  }
`

// In case that someone need our types:
export type { PageLogoPropsType as Props }
