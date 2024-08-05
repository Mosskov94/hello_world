import styles from "../Home/home.module.css";
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className={styles.home}>
            <p>Du har klikket på knappen {count} gange! :O</p>
            <button onClick={handleClick}>!KLIK!</button>
        </div>
    );
};

export default Counter;