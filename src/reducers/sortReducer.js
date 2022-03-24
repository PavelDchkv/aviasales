import { SET_TAB } from '../actions';

const initialState = {
  options: [
    { label: 'Самый дешевый', value: 'cheapest' },
    { label: 'Самый быстрый', value: 'fastest' },
    { label: 'Оптимальный', value: 'optimal' },
  ],
  currentTab: 'cheapest',
};

export const sort = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAB:
      return {
        ...state,
        currentTab: action.value,
      };
    default:
      return state;
  }
};
