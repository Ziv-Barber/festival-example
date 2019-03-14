// @flow

import React from 'react' // eslint-disable-line no-unused-vars
// import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

// Other components that we need:

// Content that we need:
import mainNavLinks from '../../content/navigator'

// Material-ui stuff:
import MuiAppBar from '@material-ui/core/AppBar'
import MuiToolbar from '@material-ui/core/Toolbar'
import MuiTypography from '@material-ui/core/Typography'
import MuiButton from '@material-ui/core/Button'
import MuiMenuIcon from '@material-ui/icons/Menu'
import MuiMenu from '@material-ui/core/Menu'
import MuiMenuItem from '@material-ui/core/MenuItem'
import MuiIconButton from '@material-ui/core/IconButton'

// Our types:
import type { NavigatorBarPropsType } from './index.types'

/**
 * NavigatorBar react component.
 * @reactProps {string} text Parameters for the component.
 */
const NavigatorBar = (props: NavigatorBarPropsType) => {
  const [menuEl, setMenuEl] = React.useState(null)
  const { className } = props

  const handleRoute = (routePath: string) => () => {
    // console.log(routePath)
    props.history.push(routePath)
  }

  const handleMenu = (event) => {
    setMenuEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMenuEl(null)
  }

  const handleMenuRoute = (routePath: string) => () => {
    handleMenuClose()
    handleRoute(routePath)
  }

  return (
    <MuiAppBar className={className} variant="absolote">
      <MuiToolbar className="navbarRoot">
        <div className="navbarTitle">
          <MuiTypography
            variant="h6"
            color="inherit"
            noWrap
            onClick={handleRoute('/')}
          >
            Festival
          </MuiTypography>
        </div>
        {mainNavLinks.map((value) => (
          <MuiButton
            className="navbarButton"
            key={value.key}
            onClick={handleRoute(value.path)}
          >
            {value.display}
          </MuiButton>
        ))}
        <MuiIconButton
          className="navbarMenu"
          color="inherit"
          aria-owns={menuEl && 'menu-appbar'}
          aria-haspopup="true"
          onClick={handleMenu}
        >
          <MuiMenuIcon />
        </MuiIconButton>
        <MuiMenu
          id="menu-appbar"
          anchorEl={menuEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={!!menuEl}
          onClose={handleMenuClose}
        >
          {mainNavLinks.map((value) => (
            <MuiMenuItem key={value.key} onClick={handleMenuRoute(value.path)}>
              {value.display}
            </MuiMenuItem>
          ))}
        </MuiMenu>
      </MuiToolbar>
    </MuiAppBar>
  )
}

const RouteNavigatorBar = withRouter(NavigatorBar)

// $FlowFixMe
export default styled(RouteNavigatorBar)`
  // background: #0047b3 !important;
  border-bottom: 1px #002966 solid;
  opacity: 0.9;

  & .navbarMenu {
  }

  & .navbarRoot {
    width: 100%;
    display: flex;
  }

  & .navbarTitle {
    flex: 1;
  }

  & .navbarButton {
  }

  @media (max-width: 599px) {
    & .navbarButton {
      display: none;
    }
  }

  @media (min-width: 600px) {
    & .navbarMenu {
      display: none;
    }
  }
`
