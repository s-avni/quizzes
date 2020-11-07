import React, { useState } from 'react';

function Question({questionContent}) {
        return (
                <div>{questionContent.text}</div>
        )
}
export {Question};