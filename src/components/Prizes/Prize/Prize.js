import React from 'react';

import classes from './Prize.module.css';

const Prize =(props) => {
    let reachedPrizeNum = parseInt(props.reachedPrize.split(',').join(''));
    let currentPrizeNum = parseInt(props.value.split(',').join(''));
    let attachedClasses;
    if (props.reachedPrize === props.value) {
        attachedClasses =[classes.Prize, classes.Current]
    } else if (currentPrizeNum < reachedPrizeNum) {
        attachedClasses =[classes.Prize, classes.Passed]
    } else {
        attachedClasses=[classes.Prize, classes.NotReached];
    }
    return (
        <div className={attachedClasses.join(' ')} >${props.value}</div>
    );
    
}

export default Prize
        
    