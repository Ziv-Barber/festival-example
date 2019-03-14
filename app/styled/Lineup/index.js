// @flow

import * as React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

// Other components that we need:
import { ItemsList } from '../../components/ItemsList'
import ActBox from '../ActBox'

// Content that we need:
import lineupContent from '../../content/lineup'

// Create the list of items for the Lineup component:
const lineupItems = lineupContent.map((value) => ({
  key: value.key,
  component: ActBox,
  compProps: {
    name: value.name,
    image: value.image
  }
  // gridProps
}))

/**
 * Lineup react component.
 */
export default styled(ItemsList).attrs({
  items: lineupItems,
  caption: 'Lineup',
  captionProps: '',
  captionVariant: '',
  containerId: '',
  gridRootDefProps: {
    spacing: 8,
    justify: 'space-around',
    alignItems: 'center'
  },
  gridDefProps: {
    xs: 12,
    sm: 4,
    md: 3,
    lg: 2,
    xl: 1
  }
})`
  margin: 0 !important;
  padding: ${(props) => props.theme.spacing.unit}px 0 !important;
  width: 100% !important;
  background: linear-gradient(to bottom, #cce0ff, #99c2ff);
  color: white;

  & .listHeader {
    padding: ${(props) => props.theme.spacing.unit}px !important;
    width: 100% !important;
    text-align: center;
    text-shadow: 2px 2px 5px #fff !important;
    color: #003366;
  }

  & .listGrid {
    margin: 0 !important;
    width: 100% !important;
    padding: ${(props) => props.theme.spacing.unit}px !important;
  }

  & .listItem {
    margin: ${(props) => props.theme.spacing.unit}px !important;
    z-index: 1050;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
