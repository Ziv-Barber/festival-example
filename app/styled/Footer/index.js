// @flow

import * as React from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Other components that we need:
import { ItemsList } from '../../components/ItemsList'

// Material-ui stuff:
import MuiButton from '@material-ui/core/Button'

// Content that we need:
import footerInfo from '../../content/footer'

const FooterMenuItem = (props: { name: string, path: string }) => (
  <Link className="link" to={props.path}>
    <MuiButton>{props.name}</MuiButton>
  </Link>
)

// Create the list of items for the Lineup component:
const footerItems = footerInfo.map((value) => ({
  key: value.key,
  component: FooterMenuItem,
  compProps: {
    name: value.name,
    path: value.path
  }
  // gridProps
}))

/**
 * footer react component.
 */
export default styled(ItemsList).attrs({
  items: footerItems,
  caption: '',
  captionProps: '',
  captionVariant: '',
  containerId: '',
  gridRootDefProps: {
    spacing: 8,
    justify: 'center',
    alignItems: 'center'
  },
  gridDefProps: {
    xs: 2,
    sm: 2,
    md: 2,
    lg: 1,
    xl: 1
  }
})`
  margin: 0 !important;
  padding: ${(props) => props.theme.spacing.unit}px 0 !important;
  width: 100% !important;
  background: #001433 !important;
  box-shadow: 0px -2px 5px 0px #fff !important;
  color: white;

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

  & .link {
    text-decoration: none;
  }
`
