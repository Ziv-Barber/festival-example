// @flow

import React, { useMemo } from 'react' // eslint-disable-line no-unused-vars

// Internationalization (i18n):
import { FormattedMessage } from 'react-intl'
import createMessages from './messages'

// Material-ui stuff:
import MuiPaper from '@material-ui/core/Paper'
import MuiTypography from '@material-ui/core/Typography'
import MuiGrid from '@material-ui/core/Grid'

// Our types:
import type {
  ItemsListPropsType,
  ItemsListItemType,
  ItemsListPropsTypeInt
} from './index.types'

/**
 * Paper based component to display grid of items + optional header.
 *
 * @reactProps {string} containerId - Optional header id in the i18n messages.
 * @reactProps {string} caption - The header caption text (optional, if you need header).
 * @reactProps {string} captionVariant - Allow you to change the variant of the caption (the default is 'h3').
 * @reactProps {object} captionProps - Optional caption extra properties.
 * @reactProps {ItemsListItemType} items - List of all the items to display.
 * @reactProps {object} gridRootDefProps - Optional settings for the grid container for the items.
 * @reactProps {object} gridDefProps - Optional settings for each grid item.
 * @reactProps {string} className - optional CSS Class name to use for the main element of the component.
 */
export const ItemsList = (props: ItemsListPropsTypeInt) => {
  const {
    id,
    containerId = '',
    caption = '',
    captionVariant = '',
    captionProps = {},
    items,
    gridRootDefProps = {},
    gridDefProps = {}
  } = props

  // The optional header caption:
  const headerLayout = useMemo(
    () => {
      if (!caption) {
        return false
      } // Endif.

      const messages = containerId && createMessages(containerId, caption)
      return (
        <MuiTypography
          id={id}
          variant={captionVariant || 'h3'}
          className="listHeader"
          {...captionProps}
        >
          {messages ? <FormattedMessage {...messages.header} /> : caption}
        </MuiTypography>
      )
    },
    [containerId, caption] // Re-render only if either containerId or caption changed.
  )

  // The grid of items itself:
  const itemsLayout = useMemo(
    () => (
      <MuiGrid container className="listGrid" {...gridRootDefProps}>
        {items.map((value: ItemsListItemType) => {
          const Component = value.component
          const gridProps = value.gridProps || {}
          const compProps = value.compProps || {}
          return (
            <MuiGrid
              item
              key={value.key}
              className="listItem"
              {...gridDefProps}
              {...gridProps}
            >
              <Component {...compProps} />
            </MuiGrid>
          )
        })}
      </MuiGrid>
    ),
    [items] // Re-render only if the list of items changed. Warning! Don't pass mutable props.items.
  )

  return (
    <MuiPaper
      id={id}
      className={props.className || 'itemsList'}
      elevation={0}
      square={true}
    >
      {headerLayout}
      {itemsLayout}
    </MuiPaper>
  )
}

/*
 * Some as ItemsLis but to be used with styled-components because Flow + styled-components 
 * not supporting optional and default props.
 */
const ItemsListWithDefault = (props: ItemsListPropsType) => {
  const {
    containerId = '',
    caption = '',
    captionVariant = '',
    captionProps = {},
    gridRootDefProps = {},
    gridDefProps = {},
    ...restProps
  } = props

  return (
    <ItemsList
      containerId={containerId}
      caption={caption}
      captionProps={captionProps}
      captionVariant={captionVariant}
      gridRootDefProps={gridRootDefProps}
      gridDefProps={gridDefProps}
      {...restProps}
    />
  )
}

export default ItemsListWithDefault

// In case that someone need our types:
export type { ItemsListPropsType as Props, ItemsListItemType as Item }
