import React from 'react' // eslint-disable-line no-unused-vars
import { storiesOf } from '@storybook/react'
import TextInput from './index'

storiesOf('TextInput', module).add(
  'basic',
  () => <TextInput text="Basic example" />,
  { notes: { markdown: 'This is an example to the TextInput component.' } }
)
