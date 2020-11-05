import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

//https://stackoverflow.com/questions/44154939/load-local-images-in-react-js
//https://create-react-app.dev/docs/using-the-public-folder/

//note: assuming EITHER code or image property, but not both!
function Question({questionContent}) {
    if (questionContent.hasOwnProperty('image')) {
        return (
            <div>
                <div>{questionContent.text}</div>
                <img style={{height: 100, width: 100}}
                     src={process.env.PUBLIC_URL + questionContent.image}/>
            </div>
        )
    } else if (questionContent.hasOwnProperty('code')) {
        return (
            <div>
                <div>{questionContent.text}</div>
                <SyntaxHighlighter language="java" style={docco} showLineNumbers>
                    {questionContent.code}
                </SyntaxHighlighter>
            </div>
        )
    } else {
        return (
            <div>{questionContent.text}</div>
        )
    }
}
export {Question};