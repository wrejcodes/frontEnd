
import { fromJS } from 'immutable';
import entriesPageReducer from '../reducer';

describe('entriesPageReducer', () => {
  it('returns the initial state', () => {
    expect(entriesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
