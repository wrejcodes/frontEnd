/**
 *
 * Asynchronously loads the component for BadPermissions
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
