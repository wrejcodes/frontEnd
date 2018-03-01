import { createSelector } from 'reselect';

/**
 * Direct selector to the manageAccounts state domain
 */
const selectManageAccountsDomain = (state) => state.get('manageAccounts');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ManageAccounts
 */

const makeSelectManageAccounts = () => createSelector(
  selectManageAccountsDomain,
  (substate) => substate.toJS()
);

export default makeSelectManageAccounts;
export {
  selectManageAccountsDomain,
};
