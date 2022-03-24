import { format } from 'date-fns';

export const transfersCount = (stops) => {
  const count = stops.length;
  if (!count) return 'Без пересадок';
  return `${count} пересадк${count > 1 ? 'и' : 'a'}`;
};

export const durationFormat = (min) => {
  const hours = Math.floor(min / 60);
  return `${hours}ч ${min - hours * 60}м`;
};

export const timeFormat = (date, duration) => {
  const dateObj = new Date(date);
  return `${format(dateObj, 'HH:mm')} - ${format(dateObj.getTime() + duration * 60000, 'HH:mm')}`;
};
