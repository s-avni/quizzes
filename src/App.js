import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {questions} from "./data/quiz1";
import {Page} from "./components/page";
import {SubmitPage} from "./components/submitPage";

//todo - add back button...
//todo - add back button and intro page

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [canProceedToNextQuestion, setCanProceedToNextQuestion] = useState(false);
  const [showSubmitPage, setShowSubmitPage] = useState(false);

  const proceedOrFinish = () => {
      if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex+1)
          setCanProceedToNextQuestion(false);
      } else {
          setShowSubmitPage(true);
      }
  }

  return (
      <div>
          {showSubmitPage ?
              <SubmitPage/>
              :
              <div>
                  <div className='progress-bar'>
                      {currentQuestionIndex + 1} / {questions.length}
                  </div>
                  <Page question={questions[currentQuestionIndex]}
                        setCanProceedToNextQuestion={setCanProceedToNextQuestion}
                        canProceedToNextQuestion={canProceedToNextQuestion}
                        proceedOrFinish={proceedOrFinish}/>
              </div>
          }
      </div>
  );
}

export default App;
