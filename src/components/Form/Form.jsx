import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';

const Form = ({submitSearch}) => {

    const [location, setLocation] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(!location || location === '') return;
        submitSearch(location);
    }

    const myLocation = (location) => {
        setLocation('');
        const {latitude, longitude} = location.coords
        submitSearch([latitude, longitude])
      }

    return (
        <form onSubmit={onSubmit}>
            <button 
                type="submit" 
                onClick={() => {navigator.geolocation.getCurrentPosition(myLocation)}}
                className={styles.button}>
                MY LOCATION
            </button>

            <span className={styles.span}>or</span>

            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />

            <button type="submit" onClick={onSubmit} className={styles.button}>
                SEARCH
            </button>
            
        </form>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
}

export default Form;
