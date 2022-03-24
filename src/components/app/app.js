import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSearchId, getTickets } from '../../actions';
import Filters from '../filters';
import Tabs from '../tabs';
import TicketsList from '../tickets-list';
import Logo from '../../img/logo.png';

import classes from './app.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.tickets.searchId);

  useEffect(() => {
    dispatch(getSearchId());
  }, []);

  useEffect(() => {
    if (searchId) dispatch(getTickets(searchId));
  }, [searchId]);

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <img src={Logo} alt="logo" className={classes.headerLogo} />
      </header>
      <main className={classes.main}>
        <Filters />
        <div className={classes.ticketsWrapper}>
          <Tabs />
          <TicketsList />
        </div>
      </main>
    </div>
  );
};

export default App;
