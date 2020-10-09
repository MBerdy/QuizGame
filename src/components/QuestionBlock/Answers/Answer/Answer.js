import React from 'react';

import classes from'./Answer.module.css';

const Answer = (props) => {
    let attachedClasses =[classes.Answer];
    if(props.correct) {
        attachedClasses =[classes.Answer, classes.Correct];
    } else {
        attachedClasses =[classes.Answer, classes.Wrong]
    }
    return(
    <div 
        onClick={props.clicked} 
        className={attachedClasses.join(' ')}>
            <span>{props.options}</span>{props.answer}
    </div>
    )
}

export default Answer;
