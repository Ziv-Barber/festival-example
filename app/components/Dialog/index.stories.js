import React from 'react' // eslint-disable-line no-unused-vars
import { storiesOf } from '@storybook/react'
import Dialog from './index'

storiesOf('Dialog', module).add(
  'basic',
  () => <Dialog text="Basic example" />,
  { notes: { markdown: 'This is an example to the Dialog component.' } }
)
