/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavigatorBar from '../../components/NavigatorBar'
import HomePage from '../../containers/HomePage/Loadable'
import NewsletterPage from '../../containers/NewsletterPage/Loadable'
import PressPage from '../../containers/PressPage/Loadable'
import PrivacyPage from '../../containers/PrivacyPage/Loadable'
import ContactPage from '../../containers/ContactPage/Loadable'
import NotFoundPage from '../../containers/NotFoundPage/Loadable'
// import SideRibbon from '../../components/SideRibbon'
import styled from 'styled-components'
// import GlobalStyle from '../../global-styles'
import withRoot from '../../utils/withRoot'

const StyledMain = styled.main`
  padding-top: 56px;
  min-width: 390px;

  @media (min-width: 0px) and (orientation: landscape) {
    padding-top: 48px;
  }

  @media (min-width: 600px) {
    padding-top: 64px;
  }
`

const App = () => (
  <React.Fragment>
    <NavigatorBar />
    <StyledMain>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/main/:id" component={HomePage} />
        <Route path="/newsletter" component={NewsletterPage} />
        <Route path="/press" component={PressPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </StyledMain>
  </React.Fragment>
)

export default withRoot(App)
