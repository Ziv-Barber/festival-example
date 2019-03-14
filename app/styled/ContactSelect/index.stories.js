import React from 'react' // eslint-disable-line no-unused-vars
import { storiesOf } from '@storybook/react'
import ContactSelect from './index'

storiesOf('ContactSelect', module).add(
  'basic',
  () => <ContactSelect text="Basic example" />,
  { notes: { markdown: 'This is an example to the ContactSelect component.' } }
)
