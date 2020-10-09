import React from 'react';

import Question from './Question/Question';
import Answers from './Answers/Anwsers'

const QuestionBlock =(props) => {
    return (
        <div className>
            <Question question ={props.currentNumQuestion.name}/>
            <Answers 
                currentAnswers = {props.currentNumQuestion.answers}
                selected ={props.selected} /> 
        </div>
    );
}

export default QuestionBlock;