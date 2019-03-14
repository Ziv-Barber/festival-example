import React from 'react' // eslint-disable-line no-unused-vars
import { storiesOf } from '@storybook/react'
import PageLogo from './index'

storiesOf('PageLogo', module).add(
  'basic',
  () => <PageLogo text="Basic example" />,
  { notes: { markdown: 'This is an example to the PageLogo component.' } }
)
