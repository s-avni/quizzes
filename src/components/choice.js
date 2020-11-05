import React, { useState } from 'react';

function Choice({choice, setCanProceedToNextQuestion}) {
    console.log(choice);
    const [hasBeenClicked, setHasBeenClicked] = useState(false);
    const explanationColor = choice.isCorrect ? "green" : "red";

    const handleClick = () => {
        setHasBeenClicked(true);
        if (choice.isCorrect) {
            setCanProceedToNextQuestion(true);
        }
    }

    return (
        <div>
            <button onClick={handleClick}>
                {choice.answerText}
            </button>
            {hasBeenClicked && <div style={{
                backgroundColor: explanationColor,
            }}>{choice.explanation}</div>}
        </div>
    )
}

export {Choice};