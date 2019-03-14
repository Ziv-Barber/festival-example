// @flow

import * as React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

// Other components that we need:
import { ItemsList } from '../../components/ItemsList'
import PartnerBox from '../PartnerBox'

// Content that we need:
import partnersList from '../../content/partners'

// Create the list of items for the Lineup component:
const partnersItems = partnersList.map((value) => ({
  key: value.key,
  component: PartnerBox,
  compProps: {
    name: value.name,
    logo: value.logo
  }
  // gridProps
}))

/**
 * Partners react component.
 */
export default styled(ItemsList).attrs({
  items: partnersItems,
  caption: 'Partners',
  captionProps: '',
  captionVariant: '',
  containerId: '',
  gridRootDefProps: {
    spacing: 8,
    justify: 'center',
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
  background: linear-gradient(to bottom, #0052cc, #002966);
  color: white;

  & .listHeader {
    padding: ${(props) => props.theme.spacing.unit}px !important;
    width: 100% !important;
    text-shadow: 2px 2px 5px #fff !important;
    text-align: center;
    color: #003366;
    // font-size: 2.5rem;
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
    min-width: 150px;
    background-image: none;
    background-color: transparent;
  }

  & .cardLogo {
    height: 70px;
    padding: 0 !important;
  }

  & .cardContent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px !important;
  }

  & .cardActions {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 !important;
  }

  & h2 {
    color: #fff !important;
    font-size: 1.5rem;
  }
`
