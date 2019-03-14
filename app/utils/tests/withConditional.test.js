import React from 'react' // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme'
import withConditional from '../withConditional'

const TestComponent = () => <div>Example component</div>

describe('withConditional', () => {
  it('should render the component only when the condition passes', () => {
    const ConditionalComponent = withConditional(TestComponent)

    const wrapper = shallow(<ConditionalComponent condition={true} />)

    expect(wrapper.html()).not.toBe(null)
  })

  it('should return null when the condition fails', () => {
    const ConditionalComponent = withConditional(TestComponent)

    const wrapper = shallow(<ConditionalComponent condition={false} />)

    expect(wrapper.html()).toBe(null)
  })
})
