const quizIntro = {
    title: "Life of a Basic CL #3",
    details: "In this quiz, you'll learn about the basics of making a CL, uploading to X, and" +
        "requesting a review."
}
const questions = [
    {
        questionContent: {
            text: 'What is the capital of France?',
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

const labels = ["X", "Y", "Z"];

const quiz3 = {questions: questions, quizIntro: quizIntro, path: "/quiz3", labels: labels}

export {quiz3};