import React, { useState, useEffect } from 'react';
import {Question} from "./question";
import {Choices} from "./choices";

function Page({question, setCanProceedToNextQuestion, canProceedToNextQuestion,
                  proceedOrFinish, goBack}) {
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

export {Page};