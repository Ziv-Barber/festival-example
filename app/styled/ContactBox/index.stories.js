import React from 'react' // eslint-disable-line no-unused-vars
import { storiesOf } from '@storybook/react'
import ContactBox from './index'

storiesOf('ContactBox', module).add(
  'basic',
  () => <ContactBox text="Basic example" />,
  { notes: { markdown: 'This is an example to the ContactBox component.' } }
)
