/**
 *
 * Asynchronously loads the component for BtnTest1
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
