import './Question.css';



const Question = ({ id, question, answer }) => {
    return (
        <div className="question-box-container">
            <p className="question-text"> question: {question}</p>
            <p className="answer-text"> answer: {answer}</p>
            {/* <p>ID: {id}</p> */}
        </div>
    );
}

export default Question;