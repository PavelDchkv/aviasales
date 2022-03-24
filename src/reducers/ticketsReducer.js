import { RECORD_SEARCH_ID, RECORD_TICKETS, GET_NEW_TICKETS, STOP_LOADING } from '../actions';

const initialState = {
  tickets: [],
  searchId: '',
  count: 5,
  isLoading: true,
};

export const tickets = (state = initialState, action) => {
  switch (action.type) {
    case RECORD_SEARCH_ID:
      return {
        ...state,
        searchId: action.id,
      };
    case RECORD_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.tickets],
      };
    case GET_NEW_TICKETS:
      return {
        ...state,
        count: state.count + action.count,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
