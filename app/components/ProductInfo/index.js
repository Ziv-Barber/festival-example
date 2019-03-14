// @flow

import * as React from 'react' // eslint-disable-line no-unused-vars
import Countdown from '../../components/Countdown'
import MuiPaper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import styled from 'styled-components'
import withConditional from '../../utils/withConditional'
import type { ProductInfoPropsType } from './index.types'

/**
 * ProductInfo react component.
 * @reactProps {string} text Parameters for the component.
 * @return New element.
 */
const ProductInfo = (props: ProductInfoPropsType) => {
  const { className } = props

  const ProductTextC = (props: {
    className: string,
    children?: React.Node
  }) => <span className={props.className}>{props.children}</span>
  const ProductText = withConditional(ProductTextC)
  const ConditionalCountdown = withConditional(Countdown)

  return (
    <MuiPaper
      elevation={0}
      square={true}
      className={className || 'productInfo'}
    >
      <ConditionalCountdown condition={props.date} date={props.date} />
      <ProductText condition={props.text} className="productText">
        {props.text}
      </ProductText>
      <Typography className="downArrow productDownArrow">
        {props.arrow || <ArrowDownward />}
      </Typography>
    </MuiPaper>
  )
}

const StyledProductInfo = styled(ProductInfo)`
  min-height: 40vh;
  background-size: cover;
  background-position: center bottom;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .productText {
    text-align: center;
  }

  .downArrow {
    text-align: center;
  }

  .countdownRoot {
    display: flex;
    justify-content: center;
    background-color: transparent;
    box-shadow: none;
  }

  .countdownBox {
    width: 70px;
    margin: ${(props) => props.theme.spacing.unit / 2}px !important;
    padding: ${(props) => props.theme.spacing.unit}px;
    display: flex;
    flex-direction: column;
  }

  .countdownValue {
    text-align: center;
  }

  .countdownText {
    text-align: center;
  }
`

export default StyledProductInfo
