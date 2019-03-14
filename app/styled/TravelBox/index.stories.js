import React from 'react' // eslint-disable-line no-unused-vars
import { storiesOf } from '@storybook/react'
import TravelBox from './index'

storiesOf('TravelBox', module).add(
  'basic',
  () => <TravelBox text="Basic example" />,
  { notes: { markdown: 'This is an example to the TravelBox component.' } }
)
