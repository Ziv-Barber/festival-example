// @flow

import * as React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

// Other components that we need:
import { ItemsList } from '../../components/ItemsList'
import TicketsBox from '../TicketsBox'

// Content that we need:
import ticketsList from '../../content/tickets'

// Create the list of items for the Lineup component:
const ticketsItems = ticketsList.map((value) => ({
  key: value.key,
  component: TicketsBox,
  compProps: {
    name: value.name,
    image: value.image,
    price: value.price,
    desc: value.desc
  }
  // gridProps
}))

/**
 * Tickets react component.
 */
export default styled(ItemsList).attrs({
  items: ticketsItems,
  caption: 'Buy Tickets',
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
  margin-bottom: -1px !important;
  padding: ${(props) => props.theme.spacing.unit}px 0 !important;
  width: 100% !important;
  background: linear-gradient(to bottom, #99c2ff, #4d94ff);
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
    border: 2px solid #fff;
    min-width: 254px;
    max-width: 254px;
    background-image: none;
    // background-color: transparent;
    background-color: #001433;
    padding: 0 !important;
  }

  & .cardImage {
    width: 254px;
    border: 2px solid #fff;
  }

  & .cardContent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.theme.spacing.unit}px !important;
  }

  & .cardActions {
    flex-direction: column;
    padding: 0 !important;
  }

  & .cardDesc {
    text-align: center;
    margin: 0 !important;
    padding: ${(props) => props.theme.spacing.unit}px !important;
  }

  & .cardButton {
    padding-bottom: ${(props) => props.theme.spacing.unit * 2}px !important;
  }

  & h2 {
    color: #fff !important;
  }
`
