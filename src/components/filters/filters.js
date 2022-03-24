import React from 'react';
import { Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { onChecked } from '../../actions';

import classes from './filters.module.scss';

const Filters = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.filters);

  const checkboxList = filters.map(({ label, value, checked }) => {
    return (
      <li className={classes.checkboxListItem} key={value}>
        <Checkbox onChange={() => dispatch(onChecked(value))} checked={checked}>
          {label}
        </Checkbox>
      </li>
    );
  });

  return (
    <div className={classes.filters}>
      <h2 className={classes.filtersTitle}>Количество пересадок</h2>
      <ul className={classes.checkboxList}>{checkboxList}</ul>
    </div>
  );
};

export default Filters;
