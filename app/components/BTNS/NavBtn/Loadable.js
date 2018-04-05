/**
 *
 * Asynchronously loads the component for NavBtn
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
