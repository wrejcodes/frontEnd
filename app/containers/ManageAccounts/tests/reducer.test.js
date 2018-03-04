
import { fromJS } from 'immutable';
import manageAccountsReducer from '../reducer';

describe('manageAccountsReducer', () => {
  it('returns the initial state', () => {
    expect(manageAccountsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
