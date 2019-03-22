import React from 'react' // eslint-disable-line no-unused-vars
import ShallowRenderer from 'react-test-renderer/shallow'

import App from '../index'

const renderer = new ShallowRenderer()

/** @test {App} */
describe('<App />', () => {
  /** @test {App} */
  it('should render and match the snapshot', () => {
    renderer.render(<App />)
    const renderedOutput = renderer.getRenderOutput()
    expect(renderedOutput).toMatchSnapshot()
  })
})
