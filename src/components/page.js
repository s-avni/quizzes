import React, { useState, useEffect } from 'react';
import {Question} from "./questionUI";
import {Choices} from "./choicesUI";

//todo - button text "nextQuestion" or "Submit"

function Page({question, setCanProceedToNextQuestion, canProceedToNextQuestion, proceedOrFinish}) {
    const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(-1);
    const correctIndex = -1; //todo - question.choices.filter()

    useEffect(() => {
        // Update the document title using the browser API
        if (selectedChoiceIndex === correctIndex) {
            setCanProceedToNextQuestion(true);
        } else {
            setCanProceedToNextQuestion(false);
        }
    }, [selectedChoiceIndex]);

    return (
        <div>
        <Question questionText={question.questionText}/>
        <Choices choices={question.choices}
                 selectedChoiceIndex={selectedChoiceIndex}
                 setSelectedChoiceIndex={setSelectedChoiceIndex}/>
        <button onClick={proceedOrFinish} disabled={!canProceedToNextQuestion}>
            Next Question
        </button>
        </div>
    )
}

export {Page};