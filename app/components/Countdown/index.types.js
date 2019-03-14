// @flow

import type { Node } from 'react'

export type CountdownPropsType = {
  date: Date,
  curDate?: Date,
  leadZero: boolean,
  finished?: Node,
  className?: string,
  classes: {
    root?: string,
    box?: string,
    value?: string,
    text?: string
  }
}

export type CountdownStateType = {
  isTimeLeft: boolean,
  years: number,
  days: number,
  hours: number,
  min: number,
  sec: number
}
