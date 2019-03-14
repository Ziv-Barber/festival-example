/*
 * ItemsList Messages
 *
 * This contains all the text for the ItemsList component.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.components.'

const createMessages = (id, headerDefText) =>
  defineMessages({
    header: {
      id: `${scope}${id}.header`,
      defaultMessage: headerDefText
    }
  })

export default createMessages
