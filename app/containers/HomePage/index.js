// @flow

import React from 'react' // eslint-disable-line no-unused-vars

import doScrolling from '../../utils/scrollTo'

// Other components that we need:
import Info from '../../styled/Info'
import Lineup from '../../styled/Lineup'
import Tickets from '../../styled/Tickets'
import Travel from '../../styled/Travel'
import Partners from '../../styled/Partners'
import Footer from '../../styled/Footer'

type HomePagePropsType = {
  match: {
    params: { id: string }
  }
}

/**
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route.
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent<HomePagePropsType> {
  componentDidMount() {
    this.scrollToElement()
  }

  componentDidUpdate(prevProps: HomePagePropsType) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.scrollToElement()
    } // Endif.
  }

  render() {
    return (
      <React.Fragment>
        <Info id="info" />
        <Lineup id="lineup" />
        <Tickets id="tickets" />
        <Travel id="travel" />
        <Partners />
        <Footer />
      </React.Fragment>
    )
  }

  scrollToElement() {
    const routeElement = this.props.match.params.id
    if (routeElement) {
      doScrolling(`#${routeElement}`, 200, -64)
    } // Endif.
  }

  static defaultProps = {
    match: {
      params: {
        id: ''
      }
    }
  }
}
