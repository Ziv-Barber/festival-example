import React from 'react' // eslint-disable-line no-unused-vars
import { createShallow } from '@material-ui/core/test-utils'

import NavigatorBar from '../index'

/** @test {NavigatorBar} */
describe('<NavigatorBar />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  /** @test {NavigatorBar} */
  it('should work', () => {
    shallow(<NavigatorBar text="This is a text" />)
  })
})
