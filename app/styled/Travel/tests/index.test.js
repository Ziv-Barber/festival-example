import React from 'react' // eslint-disable-line no-unused-vars
import { createShallow } from '@material-ui/core/test-utils'

import Travel from '../index'

/** @test {Travel} */
describe('<Travel />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  /** @test {Travel} */
  it('should work', () => {
    shallow(<Travel text="This is a text" />)
  })
})
