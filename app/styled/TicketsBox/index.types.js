// @flow

export type TicketsBoxPropsType = {
  /** Short name of this ticket type. */
  name: string,
  /** Image to use. */
  image: string,
  /** The price of this ticket. */
  price: number,
  /** Description. */
  desc: string,
  /** Class name to use for the tickets box. */
  className?: string
}
