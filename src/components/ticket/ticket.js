import React from 'react';

import imageCap from '../../img/placeholder.png';

import classes from './ticket.module.scss';
import { transfersCount, durationFormat, timeFormat } from './functions';

const Ticket = (props) => {
  const { price, segments, carrier } = props.ticket;

  const flights = segments.map(({ destination, origin, duration, stops, date }) => {
    return (
      <Flight
        key={destination + origin}
        route={`${origin} - ${destination}`}
        time={timeFormat(date, duration)}
        duration={durationFormat(duration)}
        transfers={stops.join(', ')}
        transfersCount={transfersCount(stops)}
      />
    );
  });

  const urlLogo = carrier ? `//pics.avs.io/99/36/${carrier}.png` : imageCap;

  return (
    <li className={classes.ticket}>
      <header className={classes.header}>
        <p className={classes.price}>{price.toLocaleString()} Р</p>
        <img className={classes.logo} src={urlLogo} />
      </header>
      {flights}
    </li>
  );
};

const Flight = ({ route, time, duration, transfers, transfersCount }) => {
  return (
    <div className={classes.flight}>
      <Column title={route} content={time} />
      <Column title="в пути" content={duration} />
      <Column title={transfersCount} content={transfers} />
    </div>
  );
};

const Column = ({ title, content }) => {
  return (
    <div className={classes.column}>
      <h2 className={classes.title}>{title}</h2>
      <span className={classes.content}>{content}</span>
    </div>
  );
};

export default Ticket;
