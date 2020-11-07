import React, { useState } from 'react';
import {Choice} from "./Choice";

function Choices({choices, setCanProceedToNextQuestion}) {
    return (
        <div>
            {choices.map((choice) => <Choice key={choice.answerText}
                                             choice={choice}
                                             setCanProceedToNextQuestion={setCanProceedToNextQuestion}/>
             )}
        </div>
    )
}

export {Choices};