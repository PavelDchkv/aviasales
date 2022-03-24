export const generateId = () => {
  return `id${Date.now().toString(36) + Math.random().toString(36)}`;
};

export const filterTicketsList = (ticketsList, filters) => {
  const arrFilters = [];
  filters.forEach((filter) => {
    if (filter.checked) arrFilters.push(filter.value);
  });

  if (!arrFilters.length) return [];
  if (arrFilters.includes('all')) return ticketsList;

  return ticketsList.filter((ticket) => {
    return ticket.segments.every((flight) => arrFilters.includes(flight.stops.length.toString()));
  });
};

export const sortTicketList = (ticketList, sort) => ticketList.sort(getCompareFunction(sort));

const getCompareFunction = (sort) => {
  switch (sort) {
    case 'cheapest':
      return function (a, b) {
        return a.price - b.price;
      };
    case 'fastest':
      return function (a, b) {
        return countMin(a) - countMin(b);
      };
    case 'optimal':
      return function (a, b) {
        return (countMin(a) - countMin(b)) * 10 + a.price - b.price;
      };
  }
};

const countMin = (flight) => flight.segments.reduce((acc, current) => acc + current.duration, 0);
