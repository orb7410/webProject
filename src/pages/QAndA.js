import React from 'react';
import Question from '../Question';

const questions = [
    {
        id: 1,
        question: "what is my name?",
        answer: "Avigil"
    },
    {
        id: 2,
        question: "what are the jewelries made of?",
        answer: "silver"
    },
]

const QAndA = () => {
    return (
        
        <div className= "Q-and-a-text">
            {questions.map(item => ( 
            <Question key={questions.id} id={questions.id} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
}
export default QAndA;


