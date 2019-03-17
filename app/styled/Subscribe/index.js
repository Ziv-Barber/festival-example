// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

// Other components that we need:
import TextInput from '../TextInput'

// Material-ui stuff:
import MuiButton from '@material-ui/core/Button'
import MuiCheckbox from '@material-ui/core/Checkbox'
import MuiFormControlLabel from '@material-ui/core/FormControlLabel'
// import MuiPaper from '@material-ui/core/Paper'
// import MuiTypography from '@material-ui/core/Typography'
// import MuiGrid from '@material-ui/core/Grid'

// Our types:
import type { SubscribePropsType } from './index.types'

/**
 * Subscribe react component.
 * @reactProps {string} text Parameters for the component.
 * @return New element.
 */
const Subscribe = (props: SubscribePropsType) => {
  const [email, setEmail] = React.useState('')
  const [emailErr, setEmailErr] = React.useState(false)
  const [firstName, setFirstName] = React.useState('')
  const [firstNameErr, setFirstNameErr] = React.useState(false)
  const [lastName, setLastName] = React.useState('')
  const [lastNameErr, setLastNameErr] = React.useState(false)
  const [accept, setAccept] = React.useState('')
  const [acceptErr, setAcceptErr] = React.useState(false)

  const handleChange = (
    setValue: (string | boolean) => void,
    setErr: (boolean) => void,
    isValidateEmail: boolean = false,
    isCheckBox: boolean = false
  ) => (event: { target: { value: string, checked?: boolean } }) => {
    const recvValue = isCheckBox ? event.target.checked : event.target.value

    if (typeof recvValue === 'string' && recvValue.length < 1) {
      if (typeof recvValue === 'string' || typeof recvValue === 'boolean') {
        setValue(recvValue)
      } // Endif.

      setErr(true)
      return
    } else if (recvValue === false) {
      if (typeof recvValue === 'string' || typeof recvValue === 'boolean') {
        setValue(recvValue)
      } // Endif.

      setErr(true)
      return
    } // Endif.

    // In case that this is an email field - check if the email is valid:
    const emailValidator = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/ // eslint-disable-line no-control-regex
    if (isValidateEmail && !emailValidator.test(String(email).toLowerCase())) {
      if (typeof recvValue === 'string' || typeof recvValue === 'boolean') {
        setValue(recvValue)
      } // Endif.

      setErr(true)
      return
    } // Endif.

    if (typeof recvValue === 'string' || typeof recvValue === 'boolean') {
      setValue(recvValue)
    } // Endif.

    setErr(false)
  }

  return (
    <div className={props.className}>
      <TextInput
        id="email"
        className="textInput"
        label="Email"
        value={email}
        error={emailErr || undefined}
        onChange={handleChange(setEmail, setEmailErr, true)}
      />
      <TextInput
        id="first"
        className="textInput"
        label="First Name"
        value={firstName}
        error={firstNameErr || undefined}
        onChange={handleChange(setFirstName, setFirstNameErr)}
      />
      <TextInput
        id="last"
        className="textInput"
        label="Last Name"
        value={lastName}
        error={lastNameErr || undefined}
        onChange={handleChange(setLastName, setLastNameErr)}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            checked={!!accept}
            onChange={handleChange(setAccept, setAcceptErr, false, true)}
            value="accepted"
            error={acceptErr || undefined}
          />
        }
        label="Yes, I would like to receive the free newsletter per email. I can withdraw my consent at any time. I've read the Privacy Policy."
      />
      <MuiButton
        variant="contained"
        color="primary"
        className="subButton"
        disabled={
          !email ||
          emailErr ||
          !firstName ||
          firstNameErr ||
          !lastName ||
          lastNameErr ||
          !accept
        }
      >
        Subscribe
      </MuiButton>
    </div>
  )
}

export default styled(Subscribe)`
  padding: ${(props) => props.theme.spacing.unit}px !important;
  padding-top: 0 !important;
  padding-bottom: ${(props) => props.theme.spacing.unit * 3}px !important;
  background: ${(props) => props.theme.palette.background.default};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & .textInput {
    width: 100%;
  }

  @media (min-width: 600px) {
    & .textInput {
      width: 580px;
    }
  }

  & .subButton {
  }
`

// In case that someone need our types:
export type { SubscribePropsType as Props }
