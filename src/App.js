import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {questions, quizIntro} from "./data/quiz1/quiz1";
import {Page} from "./components/page";
import {SubmitPage} from "./components/submitPage";
import {IntroPage} from "./components/introPage";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [canProceedToNextQuestion, setCanProceedToNextQuestion] = useState(false);
  const [canReturnToPreviousQuestion, setCanReturnToPreviousQuestion] = useState(false);
  const [showSubmitPage, setShowSubmitPage] = useState(false);
  const [showIntroPage, setShowIntroPage] = useState(false); //todo - set to true

  const proceedOrFinish = () => {
      if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex+1)
          setCanReturnToPreviousQuestion(true);
          setCanProceedToNextQuestion(false);
      } else {
          setShowSubmitPage(true);
      }
  }

    const goBack = () => {
        if (currentQuestionIndex > 0) { //this condition should always be true
            setCurrentQuestionIndex(currentQuestionIndex-1);
        } else {
            setShowIntroPage(true);
        }
    }

  return (
      <div>
          {showIntroPage ?
              <IntroPage setShowIntroPage={setShowIntroPage} quizIntro={quizIntro}/>
              :
              showSubmitPage ?
              <SubmitPage/>
              :
              <div>
                  <div className='progress-bar'>
                      Question {currentQuestionIndex + 1} out of {questions.length}
                  </div>
                  <Page question={questions[currentQuestionIndex]}
                        setCanProceedToNextQuestion={setCanProceedToNextQuestion}
                        canProceedToNextQuestion={canProceedToNextQuestion}
                        proceedOrFinish={proceedOrFinish}
                        goBack={goBack}
                        canReturnToPreviousQuestion={canReturnToPreviousQuestion}/>
              </div>
          }
      </div>
  );
}

export default App;
