// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

// Other components that we need:
import ProductInfo from '../../components/ProductInfo'

// Content that we need:
import infoContent from '../../content/info'
import BackImage from './heaven.jpg'

/**
 * Info react component.
 * @reactProps {string} text Parameters for the component.
 * @return New element.
 */
// $FlowFixMe
export default styled(ProductInfo).attrs({
  text: infoContent.festivalSlogen,
  date: infoContent.startDate
})`
  min-height: 80vh;
  background-image: url(${BackImage});
  color: #fff;

  & .productText {
    background-color: #001433;
    opacity: 0.8;
  }

  & .productText {
    padding: ${(props) => props.theme.spacing.unit * 2}px !important;
    border: 1px solid #fff;
    border-radius: 8px;
    max-width: 50vw;
    color: #fff;
  }

  & .productDownArrow {
    color: #001433 !important;
  }

  & .countdownRoot {
  }

  & .countdownBox {
    width: 70px;
    margin: ${(props) => props.theme.spacing.unit / 2}px !important;
    margin-top: ${(props) => props.theme.spacing.unit}px !important;
    padding: ${(props) => props.theme.spacing.unit}px;
    background: #0066ff;
    color: #fff;
  }

  & .countdownValue {
  }

  & .countdownText {
  }
`
