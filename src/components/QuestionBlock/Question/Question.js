import React from 'react';

import classes from './Question.module.css';

const Question = (props) => {
    return(
        <h2 className ={classes.Question}>{props.question}</h2>
    );    
}

export default Question;