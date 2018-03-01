import { createSelector } from 'reselect';

/**
 * Direct selector to the badPermissions state domain
 */
const selectBadPermissionsDomain = (state) => state.get('badPermissions');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BadPermissions
 */

const makeSelectBadPermissions = () => createSelector(
  selectBadPermissionsDomain,
  (substate) => substate.toJS()
);

export default makeSelectBadPermissions;
export {
  selectBadPermissionsDomain,
};
