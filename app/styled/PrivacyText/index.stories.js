import React from 'react' // eslint-disable-line no-unused-vars
import { storiesOf } from '@storybook/react'
import PrivacyText from './index'

storiesOf('PrivacyText', module).add(
  'basic',
  () => <PrivacyText text="Basic example" />,
  { notes: { markdown: 'This is an example to the PrivacyText component.' } }
)
