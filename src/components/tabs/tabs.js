import React from 'react';
import { Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { setTab } from '../../store/actions';

import classes from './tabs.module.scss';

const Tabs = () => {
  const dispatch = useDispatch();
  const { options, currentTab } = useSelector((state) => state.sort);

  const onChange = (e) => {
    dispatch(setTab(e.target.value));
  };

  return (
    <Radio.Group
      className={classes.tabs}
      options={options}
      onChange={onChange}
      value={currentTab}
      optionType="button"
      buttonStyle="solid"
    />
  );
};

export default Tabs;
