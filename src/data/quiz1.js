const quizIntro = {
    title: "Life of a Basic CL",
    details: "In this quiz, you'll learn about the basics of making a CL, uploading to X, and" +
        "requesting a review."
}
//todo - remove code segment....put it all in the <p>
//todo - likewise for the image!
const questions = [
    {
        questionContent: {
            text:  <p>What is the capital of France?<a href="https://www.w3schools.com">Visit W3Schools.com!</a></p>,
            code: "public string getDirectionsToBeach(int age) {\n" +
                "  if (age > 16) {\n" +
                "    return 'Drive to beach';\n"+
                "  } else if (age < 0) {\n" +
                "    return 'Error';"
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
            image: "quiz1/dummy-img.png",
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

//todo - change to only export quiz1...
//todo - mapping in the App.js folder (using index.js)
const quiz1 = {questions: questions, quizIntro: quizIntro, path: "/quiz1"}

export {questions, quizIntro, quiz1};