// @flow

import React from 'react' // eslint-disable-line no-unused-vars

// Other components that we need:
import PageLogo from '../../styled/PageLogo'
import Footer from '../../styled/Footer'

import pageBack from '../../images/press.png'

/*
 * PressPage
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
/* eslint-disable react/prefer-stateless-function */
export default class PressPage extends React.PureComponent<{}> {
  render() {
    return (
      <React.Fragment>
        <PageLogo back={pageBack}>Press</PageLogo>
        <Footer />
      </React.Fragment>
    )
  }
}
