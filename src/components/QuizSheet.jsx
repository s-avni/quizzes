import React from 'react';
import {Question} from "./Question";
import {Choices} from "./Choices";

function QuizSheet({
                  question, setCanProceedToNextQuestion, canProceedToNextQuestion,
                  proceedOrFinish, goBack
              }) {
    return (
        <div>
            <Question questionContent={question.questionContent}/>
            <Choices choices={question.choices}
                     setCanProceedToNextQuestion={setCanProceedToNextQuestion}/>
            <button onClick={goBack}>
                Back
            </button>
            <button onClick={proceedOrFinish} disabled={!canProceedToNextQuestion}>
                Next
            </button>
        </div>
    )
}

export {QuizSheet};