import React from 'react' // eslint-disable-line no-unused-vars
import { createShallow } from '@material-ui/core/test-utils'

import NavigatorBar from '../index'
import withRoot from '../../../utils/withRoot'

/** @test {NavigatorBar} */
describe('<NavigatorBar />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  /** @test {NavigatorBar} */
  it('should work', () => {
    const App = withRoot(NavigatorBar)
    shallow(<App />)
  })
})
