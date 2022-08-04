import React from 'react';
import PropTypes from 'prop-types';

import styles from './UpcomingDaysForecastItem.module.css';

const UpcomingDaysForecastItem = ({ hour, temperature, imgUrl }) => (
    <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
        <img src={imgUrl} alt="" className="mb-2" />
        <span className="mb-2">{hour}</span>
        <span className="font-weight-bold">{temperature}&deg;</span>
    </li>
);

UpcomingDaysForecastItem.propTypes = {
    weekday: PropTypes.string,
    temperature: PropTypes.number, 
    imgUrl: PropTypes.string,
  };
  

export default UpcomingDaysForecastItem;
