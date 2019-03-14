// @flow

import React from 'react' // eslint-disable-line no-unused-vars

// Other components that we need:
import PageLogo from '../../styled/PageLogo'
import PrivactText from '../../styled/PrivacyText'
import Footer from '../../styled/Footer'

import infoContent from '../../content/info'

import pageBack from '../../images/privacy.jpg'

/*
 * PrivacyPage
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
/* eslint-disable react/prefer-stateless-function */
export default class PrivacyPage extends React.PureComponent<{}> {
  render() {
    return (
      <React.Fragment>
        <PageLogo back={pageBack}>Privacy</PageLogo>
        <PrivactText>{infoContent.privacy}</PrivactText>
        <Footer />
      </React.Fragment>
    )
  }
}
