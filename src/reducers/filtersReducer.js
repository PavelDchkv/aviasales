import { ON_CHECKED } from '../actions';

const initialState = {
  filters: [
    { label: 'Все', value: 'all', checked: false },
    { label: 'Без пересадок', value: '0', checked: true },
    { label: '1 пересадка', value: '1', checked: true },
    { label: '2 пересадки', value: '2', checked: true },
    { label: '3 пересадки', value: '3', checked: false },
  ],
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHECKED:
      if (action.value === 'all') {
        const isChecked = !state.filters[0].checked;
        return {
          ...state,
          filters: state.filters.map((filter) => ({ ...filter, checked: isChecked })),
        };
      }

      // eslint-disable-next-line no-case-declarations
      const newFilters = state.filters.map((filter) => {
        return filter.value === action.value ? { ...filter, checked: !filter.checked } : filter;
      });

      newFilters[0].checked = newFilters.every((filter) => filter.value === 'all' || filter.checked);

      return {
        ...state,
        filters: newFilters,
      };

    default:
      return state;
  }
};
