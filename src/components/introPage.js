import React, { useState } from 'react';

function IntroPage({setShowIntroPage, quizIntro}) {

    const goToQuestions = () => {
        setShowIntroPage(false);
    }

    return (
        <div>
        <div>
            {quizIntro.title}
        </div>
        <div>
            {quizIntro.details}
        </div>
        <button onClick={goToQuestions}>Next</button>
        </div>
    )
}

export {IntroPage};