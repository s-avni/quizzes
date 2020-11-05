import React, { useState, useEffect } from 'react';
import {Question} from "./question";
import {Choices} from "./choices";

//todo - button text "nextQuestion" or "Submit"

function Page({question, setCanProceedToNextQuestion, canProceedToNextQuestion, proceedOrFinish}) {
    return (
        <div>
        <Question questionText={question.questionText}/>
        <Choices choices={question.choices}
                 setCanProceedToNextQuestion={setCanProceedToNextQuestion}/>
        <button onClick={proceedOrFinish} disabled={!canProceedToNextQuestion}>
            Next Question
        </button>
        </div>
    )
}

export {Page};