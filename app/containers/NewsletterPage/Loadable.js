import loadable from 'loadable-components'

/**
 * Asynchronously loads the NewsletterPage component.
 */
export default loadable(() => import('./index'))
