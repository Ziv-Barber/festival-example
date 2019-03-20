import { configure } from '@storybook/react'

import defTheme from '../app/theme'

// Automatically import all files ending in *.stories.js:
const req = require.context('../app', true, /.stories.js$/)
function loadStories() {
  req.keys().sort().forEach(filename => req(filename))
}

// Our custom data for some stories. We are passing here information about themes, etc:
global.customStoriesData = {
  themes: [
    {
      name: 'Default theme',
      theme: defTheme
    }
  ],
  curTheme: 0
}

configure(loadStories, module)
