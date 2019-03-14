import React from 'react' // eslint-disable-line no-unused-vars
import { mount } from 'enzyme'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { createMemoryHistory } from 'history'
import LanguageProvider from 'containers/LanguageProvider'
import configureStore from '../../../configureStore'
import { translationMessages } from '../../../i18n'

import App from '../index'

window.React = React
const history = createMemoryHistory('/')
const store = configureStore({}, history)

describe('<App />', () => {
  it('should render some routes', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </LanguageProvider>
      </Provider>
    )
    expect(renderedComponent.find(Route).length).not.toBe(0)
  })
})
