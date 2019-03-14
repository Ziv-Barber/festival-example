import React from 'react' // eslint-disable-line no-unused-vars
import { storiesOf } from '@storybook/react'
import BigText from './index'

storiesOf('BigText', module).add(
  'basic',
  () => <BigText text="Basic example" />,
  { notes: { markdown: 'This is an example to the BigText component.' } }
)
