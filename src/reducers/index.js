import { combineReducers } from 'redux';

import { filters } from './filtersReducer';
import { sort } from './sortReducer';
import { tickets } from './ticketsReducer';

export default combineReducers({
  sort,
  filters,
  tickets,
});
