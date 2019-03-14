// @flow

import * as React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

// Other components that we need:
import { ItemsList } from '../../components/ItemsList'
import TravelBox from '../TravelBox'

// Content that we need:
import travelList from '../../content/travel'

// Create the list of items for the Lineup component:
const travelItems = travelList.map((value) => ({
  key: value.key,
  component: TravelBox,
  compProps: {
    name: value.name,
    image: value.image,
    options: value.options
  }
  // gridProps
}))

/**
 * Tickets react component.
 */
export default styled(ItemsList).attrs({
  items: travelItems,
  caption: 'Travel',
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
  background: linear-gradient(to bottom, #4d94ff, #0052cc);
  color: white;

  & .listHeader {
    padding: ${(props) => props.theme.spacing.unit}px !important;
    width: 100% !important;
    text-shadow: 2px 2px 5px #fff !important;
    text-align: center;
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

  & .card {
    min-width: 254px;
    background-image: none;
    background-color: transparent;
  }

  & .cardImage {
    width: 250px;
    border: 2px solid #fff;
    padding: 0 !important;
  }

  & .cardContent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px !important;
  }

  & .cardActions {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 !important;
  }

  & .cardInfo {
    position: absolute;
    top: 46px;
    left: 100px;
  }

  & h2 {
    color: #fff !important;
  }

  & .popup .paper {
    width: 80vw;
    min-height: 300px;
  }
`
