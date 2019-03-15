// @flow

import React from 'react' // eslint-disable-line no-unused-vars

// Other components that we need:
import PageLogo from '../../styled/PageLogo'
import BigText from '../../styled/BigText'
import Subscribe from '../../styled/Subscribe'
import Footer from '../../styled/Footer'

import pageBack from '../../images/backImage.jpg'

/*
 * NewsletterPage
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
/* eslint-disable react/prefer-stateless-function */
export default class NewsletterPage extends React.PureComponent<{}> {
  render() {
    return (
      <React.Fragment>
        <PageLogo back={pageBack}>Newsletter</PageLogo>
        <BigText>
          Be the first to know about upcoming editions, line-up and presale
          announcements. Sign up for our subscriber list - no worries, we don't
          spam you!
        </BigText>
        <Subscribe />
        <Footer />
      </React.Fragment>
    )
  }
}
