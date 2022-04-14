import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Ticket from '../ticket';
import Spinner from '../spinner';
import { getNewTickets } from '../../store/actions';

import classes from './tickets-list.module.scss';
import { generateId, filterTicketsList, sortTicketList } from './functions';

const TicketsList = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const filters = useSelector((state) => state.filters.filters);
  const sort = useSelector((state) => state.sort.currentTab);
  const countTickets = useSelector((state) => state.tickets.count);
  const isLoading = useSelector((state) => state.tickets.isLoading);
  const dispatch = useDispatch();

  const ticketsArr = sortTicketList(filterTicketsList(tickets, filters), sort)
    .slice(0, countTickets)
    .map((ticket) => {
      return <Ticket ticket={ticket} key={generateId()} />;
    });

  const ticketsList = ticketsArr.length ? (
    <React.Fragment>
      <ul className={classes.ticketList}>{ticketsArr}</ul>
      <button className={classes.button} type="button" onClick={() => dispatch(getNewTickets(5))}>
        <span>Показать еще 5 билетов</span>
      </button>
    </React.Fragment>
  ) : (
    <p className={classes.msg}>Рейсов, подходящих под заданные фильтры, не найдено</p>
  );

  return (
    <React.Fragment>
      {isLoading && <Spinner />}
      {ticketsList}
    </React.Fragment>
  );
};

export default TicketsList;
