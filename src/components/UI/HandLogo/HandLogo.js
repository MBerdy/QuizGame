import React from 'react';

import Hand from '../../../assets/img/hand.png';
import classes from './HandLogo.module.css';

const HandLogo =() => (
    <img src={Hand} alt="Hand"className={classes.Hand} />
);

export default HandLogo;