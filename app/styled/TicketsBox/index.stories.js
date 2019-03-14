import React from 'react' // eslint-disable-line no-unused-vars
import { storiesOf } from '@storybook/react'
import TicketsBox from './index'

storiesOf('TicketsBox', module).add(
  'basic',
  () => <TicketsBox text="Basic example" />,
  { notes: { markdown: 'This is an example to the TicketsBox component.' } }
)
