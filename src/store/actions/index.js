export const SET_TAB = 'SET_TAB';
export const ON_CHECKED = 'ON_CHECKED';
export const RECORD_SEARCH_ID = 'RECORD_SEARCH_ID';
export const RECORD_TICKETS = 'RECORD_TICKETS';
export const GET_NEW_TICKETS = 'GET_NEW_TICKETS';
export const STOP_LOADING = 'STOP_LOADING';

const apiBase = 'https://front-test.beta.aviasales.ru';

export const setTab = (value) => {
  return {
    type: SET_TAB,
    value,
  };
};

export const onChecked = (value) => {
  return {
    type: ON_CHECKED,
    value,
  };
};

export const getNewTickets = (count) => {
  return {
    type: GET_NEW_TICKETS,
    count,
  };
};

const recordSearchId = (id) => {
  return {
    type: RECORD_SEARCH_ID,
    id,
  };
};

const recordTickets = (tickets) => {
  return {
    type: RECORD_TICKETS,
    tickets,
  };
};

const stopLoading = () => {
  return {
    type: STOP_LOADING,
  };
};

export const getSearchId = () => async (dispatch) => {
  try {
    const res = await fetch(`${apiBase}/search`);
    const { searchId } = await res.json();
    dispatch(recordSearchId(searchId));
  } catch (err) {
    throw new Error(`Something went wrong in getSearchId(), error: ${err.message}`);
  }
};

export const getTickets = (searchId) => async (dispatch) => {
  try {
    const res = await fetch(`${apiBase}/tickets?searchId=${searchId}`);

    if (!res.ok) {
      throw new Error(`Something went wrong in getTickets(), received ${res.status}`);
    }

    const { tickets, stop } = await res.json();
    dispatch(recordTickets(tickets));

    if (!stop) {
      dispatch(getTickets(searchId));
    } else {
      dispatch(stopLoading());
    }
  } catch (err) {
    console.log(err);
    dispatch(getTickets(searchId));
  }
};
