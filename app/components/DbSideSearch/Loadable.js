/**
 *
 * Asynchronously loads the component for DbViewport
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
