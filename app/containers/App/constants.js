/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const API_URL = 'http://localhost:3001/api';
export const SCHEMAS = {
  blank: [],
  login: [
    { type: 'text', label: ' Username' },
    { type: 'password', label: ' Password' },
  ],
  registration: [
    { type: 'email', label: ' Email' },
    { type: 'text', label: ' Username' },
    { type: 'password', label: ' Password' },
    { type: 'password', label: ' Confirm Password' },
  ],
  target: [
    { type: 'text', label: ' Target Name' },
    { type: 'number', label: ' Target ID' },
  ],
  experiment: [
    { type: 'text', label: ' Experiment Name', name: 'assay_name' },
    { type: 'number', label: ' Experiment ID', name: 'aid' },
  ],
  chemical: [
    { type: 'text', label: ' Chemical Name' },
    { type: 'number', label: ' Chemical ID' },
  ],
};
