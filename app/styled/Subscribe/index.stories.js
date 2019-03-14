import React from 'react' // eslint-disable-line no-unused-vars
import { storiesOf } from '@storybook/react'
import Subscribe from './index'

storiesOf('Subscribe', module).add(
  'basic',
  () => <Subscribe text="Basic example" />,
  { notes: { markdown: 'This is an example to the Subscribe component.' } }
)
