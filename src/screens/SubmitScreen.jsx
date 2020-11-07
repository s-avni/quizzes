import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

function SubmitScreen() {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/'), [history]);

    return (
        <div>
            <p>Thanks, you're done!</p>
            <button type="button" onClick={handleOnClick}>
                Return to quiz list.
            </button>
        </div>
    )
}

export {SubmitScreen};