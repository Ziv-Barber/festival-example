// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { withRouter } from 'react-router'

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
class NewsletterPage extends React.PureComponent<{
  location: { pathname: string }
}> {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

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

// $FlowFixMe
export default withRouter(NewsletterPage)
