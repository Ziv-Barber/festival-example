// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

// Other components that we need:

// Material-ui stuff:
import TextField from '@material-ui/core/TextField'

import type TextFieldType from '@material-ui/core/TextField/TextField'

// Our types:
import type { TextInputPropsType } from './index.types'

/**
 * TextInput react component.
 * @reactProps {string} text Parameters for the component.
 * @return New element.
 */
const TextInput = (props: TextFieldType & TextInputPropsType) => (
  <TextField {...props} variant="outlined" margin="normal" />
)

export default styled(TextInput)`
  color: #fff;
`

// In case that someone need our types:
export type { TextInputPropsType as Props }
