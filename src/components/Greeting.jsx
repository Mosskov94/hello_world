// Greeting.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from "../Home/home.module.css";

const Greeting = ({ name }) => {
    return (
        <div className={styles.home}>
            <p>Hello, {name}!</p>
        </div>
    );
};

Greeting.propTypes = {
    name: PropTypes.string.isRequired
};

export default Greeting;