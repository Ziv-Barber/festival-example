import React from 'react' // eslint-disable-line no-unused-vars
import { storiesOf } from '@storybook/react'
import ActBox from './index'

import armstrong from '../../content/lineup/louis.jpg'

storiesOf('basic.basic.ActBox', module).add(
  'ActBox',
  () => <ActBox name="Louis Armstrong" image={armstrong} />,
  { notes: { markdown: 'This is an example to the ActBox component.' } }
)
