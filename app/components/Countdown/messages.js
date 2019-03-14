import { defineMessages } from 'react-intl'

export const scope = 'app.components.Countdown'

/**
 * Messages for the Countdown component.
 *
 * This contains all the text for the Countdown component.
 */
export default defineMessages({
  year: {
    id: `${scope}.year`,
    defaultMessage: 'Year'
  },
  years: {
    id: `${scope}.years`,
    defaultMessage: 'Years'
  },
  day: {
    id: `${scope}.day`,
    defaultMessage: 'Day'
  },
  days: {
    id: `${scope}.days`,
    defaultMessage: 'Days'
  },
  hours: {
    id: `${scope}.hours`,
    defaultMessage: 'Hours'
  },
  min: {
    id: `${scope}.min`,
    defaultMessage: 'Min'
  },
  sec: {
    id: `${scope}.sec`,
    defaultMessage: 'Sec'
  }
})
