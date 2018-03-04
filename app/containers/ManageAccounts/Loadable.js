/**
 *
 * Asynchronously loads the component for ManageAccounts
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
