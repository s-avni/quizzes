import './App.css';
import React, {useState} from 'react';
import {questions, quizIntro} from "./data/quiz1";
import {QuizSheet} from "./components/QuizSheet";
import {SubmitScreen} from "./screens/SubmitScreen";
import {IntroScreen} from "./screens/IntroScreen";

function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [canProceedToNextQuestion, setCanProceedToNextQuestion] = useState(false);
    const [canReturnToPreviousQuestion, setCanReturnToPreviousQuestion] = useState(false);
    const [showSubmitPage, setShowSubmitPage] = useState(false);
    const [showIntroPage, setShowIntroPage] = useState(true); //todo - set to true

    const proceedOrFinish = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setCanReturnToPreviousQuestion(true);
            setCanProceedToNextQuestion(false);
        } else {
            setShowSubmitPage(true);
        }
    }

    const goBack = () => {
        if (currentQuestionIndex > 0) { //this condition should always be true
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        } else {
            setShowIntroPage(true);
        }
    }

    return (
        <div>
            {showIntroPage ?
                <IntroScreen setShowIntroPage={setShowIntroPage} quizIntro={quizIntro}/>
                :
                showSubmitPage ?
                    <SubmitScreen/>
                    :
                    <>
                        <div className='progress-bar'>
                            Question {currentQuestionIndex + 1} out of {questions.length}
                        </div>
                        <QuizSheet question={questions[currentQuestionIndex]}
                                   setCanProceedToNextQuestion={setCanProceedToNextQuestion}
                                   canProceedToNextQuestion={canProceedToNextQuestion}
                                   proceedOrFinish={proceedOrFinish}
                                   goBack={goBack}
                                   canReturnToPreviousQuestion={canReturnToPreviousQuestion}/>
                    </>
            }
        </div>
    );
}

export {Quiz};
