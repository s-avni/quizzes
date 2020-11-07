import React, { useState } from 'react';
import '../index.css';

function IntroScreen({setShowIntroPage, quizIntro}) {
    const goToQuestions = () => {
        setShowIntroPage(false);
    }

    return (
        <div>
        <code>
            {quizIntro.title}
        </code>
        <div>
            {quizIntro.details}
        </div>
        <button onClick={goToQuestions}>Next</button>
        </div>
    )
}

export {IntroScreen};