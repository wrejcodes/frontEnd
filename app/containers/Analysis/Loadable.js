/**
 *
 * Asynchronously loads the component for Analysis
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
