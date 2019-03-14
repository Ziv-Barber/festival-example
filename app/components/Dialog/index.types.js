// @flow

import * as React from 'react' // eslint-disable-line no-unused-vars

export type DialogPropsType = {
  /** Is true to show the dialog, else you'll see noting. */
  open: boolean,
  /** Close handler. */
  onClose: () => void,
  /** Styles for the dialog. */
  className?: string,
  /** Title for the dialog. */
  title: string,
  /** The children will be placed inside the dialog content. */
  children?: React.Node
}
