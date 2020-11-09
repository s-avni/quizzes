import {docco} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import React from "react";

//https://stackoverflow.com/questions/44154939/load-local-images-in-react-js
//https://create-react-app.dev/docs/using-the-public-folder/

const quizIntro = {
    title: "Life of a Basic CL",
    details: "In this quiz, you'll learn about the basics of making a CL, uploading to X, and" +
        "requesting a review."
}

const snippet1 =
    "public string getDirectionsToBeach(int age) {\n" +
    "  if (age > 16) {\n" +
    "    return 'Drive to beach';\n" +
    "  } else if (age < 0) {\n" +
    "    return 'Error';\n" +
    "}"

const questions = [
    {
        questionContent: {
            text:  <>
                <p>What is the capital of France?</p>
                <a href="https://www.w3schools.com">A url!</a>
                <p>A code snippet!</p>
                <SyntaxHighlighter language="java" style={docco} showLineNumbers>
                    {snippet1}
                </SyntaxHighlighter>
                <p>An image!</p>
                <img style={{height: 100, width: 100}}
                     src={process.env.PUBLIC_URL + "/quiz1/dummy-img.png"}/>
            </>,
        },
        choices: [
            { answerText: 'New York', isCorrect: false, explanation: "No..." },
            { answerText: 'London', isCorrect: false, explanation: "No..." },
            { answerText: 'Paris', isCorrect: true, explanation: "Yes..." },
            { answerText: 'Dublin', isCorrect: false, explanation: "No..." },
        ],
    },
    {
        questionContent: {
            text: 'Who is CEO of Tesla?',
        },
        choices: [
            { answerText: 'Jeff Bezos', isCorrect: false, explanation: "No..." },
            { answerText: 'Elon Musk', isCorrect: true, explanation: "Yes..." },
            { answerText: 'Bill Gates', isCorrect: false, explanation: "No..." },
            { answerText: 'Tony Stark', isCorrect: false, explanation: "No..." },
        ],
    },
    // {
    //     questionText: 'The iPhone was created by which company?',
    //     choices: [
    //         { answerText: 'Apple', isCorrect: true, explanation: "Yes..." },
    //         { answerText: 'Intel', isCorrect: false, explanation: "No..." },
    //         { answerText: 'Amazon', isCorrect: false, explanation: "No..." },
    //         { answerText: 'Microsoft', isCorrect: false, explanation: "No..." },
    //     ],
    // },
    // {
    //     questionText: 'How many Harry Potter books are there?',
    //     answerOptions: [
    //         { answerText: '1', isCorrect: false, explanation: "No..." },
    //         { answerText: '4', isCorrect: false, explanation: "No..." },
    //         { answerText: '6', isCorrect: false, explanation: "No..." },
    //         { answerText: '7', isCorrect: true, explanation: "Yes..." },
    //     ],
    // },
];

const labels = ["Java", "Protocol Buffers"];

const quiz1 = {questions: questions, quizIntro: quizIntro, path: "/quiz1", labels: labels}

export {quiz1};