// @flow

import * as React from 'react' // eslint-disable-line no-unused-vars

export type PageLogoPropsType = {
  /** Optional class name to use for the root element. */
  className?: string,
  /** Url to the background image. */
  back: string,
  /** The content to display in the middle. */
  children?: React.Node
}
