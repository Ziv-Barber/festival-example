// @flow

import type { ComponentType } from 'react'

/**
 * Declaration of the props of each item to display in the ItemsList container.
 */
export type ItemsListItemType = {
  /** The key of the item. */
  key: string,
  /** The component of the item. */
  component: ComponentType<any>,
  /** Additional optional props for the item's component. */
  compProps?: {},
  /** Additional optional props for the grid item. */
  gridProps?: {}
}

type ItemsListPropsTypeBase = {
  /**
   * List of all the items to display.
   *
   * Warning: Don't pass mutable object as the items props or the items will not be re-rendered since that
   * we are doiung optimization inside this component.
   */
  items: Array<ItemsListItemType>,
  /**
   * The class style for the root papaer element of ItemsList.
   *
   * List of sub-classes:
   *
   * .listHeader - Styling the caption header.
   * .listGrid - Styling the grid container for the items.
   * .listItem - Styling the grid item.
   */
  className?: string
}

/**
 * Declaration of all the props of the ItemsList component.
 */
export type ItemsListPropsType = ItemsListPropsTypeBase & {
  /** Optional id for this container to be used in the i18n messages. */
  containerId?: string,
  /**
   * The header caption text (optional, if you need header).
   * If headerId is been declared then this value is the default text (can be overide by a language translation).
   */
  caption?: string,
  /** Allow you to change the variant of the caption (the default is 'h3') */
  captionVariant?: string,
  /** Optional caption extra properties. */
  captionProps?: Object,
  /** Optional settings for the grid container for the items. */
  gridRootDefProps?: Object,
  /** Optional settings for each grid item. */
  gridDefProps?: Object
}

/**
 * Workaround for Flow + styled-components.
 */
export type ItemsListPropsTypeInt = ItemsListPropsTypeBase & {
  /** Optional ID */
  id?: string,
  /** Optional id for this container to be used in the i18n messages. */
  containerId: string,
  /**
   * The header caption text (optional, if you need header).
   * If headerId is been declared then this value is the default text (can be overide by a language translation).
   */
  caption: string,
  /** Allow you to change the variant of the caption (the default is 'h3') */
  captionVariant: string,
  /** Optional caption extra properties. */
  captionProps: Object,
  /** Optional settings for the grid container for the items. */
  gridRootDefProps: Object,
  /** Optional settings for each grid item. */
  gridDefProps: Object
}
