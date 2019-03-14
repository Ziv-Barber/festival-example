import React from 'react' // eslint-disable-line no-unused-vars
import { storiesOf } from '@storybook/react'
import Lineup from './index'

storiesOf('Lineup', module).add(
  'basic',
  () => <Lineup text="Basic example" />,
  { notes: { markdown: 'This is an example to the Lineup component.' } }
)
