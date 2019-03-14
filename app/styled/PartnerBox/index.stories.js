import React from 'react' // eslint-disable-line no-unused-vars
import { storiesOf } from '@storybook/react'
import PartnerBox from './index'
import circuit from '../../content/partners/circuit.png'
import withRoot from '../../utils/withRoot'

const Comp = (props) => <PartnerBox {...props} />
const PartnerBoxWrapper = withRoot(Comp)

storiesOf('PartnerBox', module).add(
  'basic',
  () => <PartnerBoxWrapper name="Circuit City" logo={circuit} />,
  { notes: { markdown: 'This is an example to the PartnerBox component.' } }
)
