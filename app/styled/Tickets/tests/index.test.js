import React from 'react' // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme'

import Tickets from '../index'

/** @test {Tickets} */
describe('<Tickets />', () => {
  /** @test {Tickets} */
  it('should render a text prop', () => {
    shallow(<Tickets name="bus" options={{}} />)
    // const wrapper = shallow(<Tickets text="This is a text" />)
    // const renderedText = wrapper.find('span')
    // expect(renderedText.text()).toEqual('This is a text')
  })
})
