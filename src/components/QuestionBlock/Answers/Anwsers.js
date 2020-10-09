import React from 'react';

import Answer from './Answer/Answer';
import classes from './Answers.module.css';

const Answers = (props) => {
    const options = ['A', 'B', 'C', 'D', 'E', 'F'];
    return(        
       <div className ={classes.Answers}>
          {props.currentAnswers.map ((answer, id) => {
              return <Answer
                        options ={options[id]} 
                        key={options[id]} 
                        answer ={answer.text}
                        correct ={answer.isCorrect}
                        clicked ={()=>{props.selected(answer.isCorrect)}} />
          })}
       </div>
    )

}

export default Answers;