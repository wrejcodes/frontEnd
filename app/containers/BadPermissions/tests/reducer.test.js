
import { fromJS } from 'immutable';
import badPermissionsReducer from '../reducer';

describe('badPermissionsReducer', () => {
  it('returns the initial state', () => {
    expect(badPermissionsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
