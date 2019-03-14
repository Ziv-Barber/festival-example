import React from 'react' // eslint-disable-line no-unused-vars

/**
 * High order component to display the component only if the condition is true.
 */
const withConditional = (Component) => ({
  condition,
  altComponent,
  ...props
}) => {
  if (condition) {
    return <Component {...props} />
  } // Endif.

  return altComponent || null
}

export default withConditional
