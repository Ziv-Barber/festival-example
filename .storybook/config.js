import { addDecorator, configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { themes } from '@storybook/components'

// Set our theme:
/*
addDecorator(
  withOptions({
    name: 'Storybook theme',
    theme: themes.dark
  })
)
*/

// Automatically import all files ending in *.stories.js:
const req = require.context('../app', true, /.stories.js$/)
function loadStories() {
  req.keys().sort().forEach(filename => req(filename))
}

configure(loadStories, module)
