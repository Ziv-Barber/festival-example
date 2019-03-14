// @flow

import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'
import type { SideRibbonPropsType } from './index.types'

/**
 * SideRibbon react component.
 * @reactProps {string} className Optional CSS Class name to use for the main element of the component.
 * @reactProps {string} classes Optional list of CSS Classes to use for internal elements of this component.
 */
const SideRibbon = (props: SideRibbonPropsType) => (
  <span className={props.className}>
    <a>{props.children}</a>
  </span>
)

export default styled(SideRibbon)`
  & > a {
    position: relative;

    background: #000;
    color: #fff;

    text-decoration: none;
    font-family: arial, sans-serif;
    text-align: center;
    font-weight: bold;

    padding: 5px 40px;
    font-size: 1rem;
    line-height: 2rem;
    transition: 0.5s;
  }

  & > a:hover {
    background: #11c;
    color: #fff;
  }

  & > a::before,
  & > a::after {
    content: '';
    width: 100%;
    display: block;
    position: absolute;
    top: 1px;
    left: 0;
    height: 1px;
    background: #fff;
  }

  & > a::after {
    bottom: 1px;
    top: auto;
  }

  @media screen and (min-width: 800px) {
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    width: 400px;
    overflow: hidden;
    height: 400px;
    z-index: 9999;

    & > a {
      width: 400px;
      position: absolute;
      top: 60px;
      right: -120px;
      transform: rotate(45deg);
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);
    }
  }
`
