// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import { withRouter } from 'react-router'

// Other components that we need:
import PageLogo from '../../styled/PageLogo'
import Footer from '../../styled/Footer'

import pageBack from '../../images/contact.jpg'

/*
 * ContactPage
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
/* eslint-disable react/prefer-stateless-function */
class ContactPage extends React.PureComponent<{
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
        <PageLogo back={pageBack}>Contact Us</PageLogo>
        <Footer />
      </React.Fragment>
    )
  }
}

// $FlowFixMe
export default withRouter(ContactPage)
