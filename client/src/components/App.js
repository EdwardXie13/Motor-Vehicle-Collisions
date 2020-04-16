import React from 'react';

import useApp from '../hooks/useApp';

const App = () => {
    const [handleButtonClick, handleOnChange, renderResponse, disabled] = useApp();

    return (
        <div>
            <input type="text" onChange={handleOnChange} />
            <button onClick={handleButtonClick} disabled={disabled}>Meow</button>
            {renderResponse()}
        </div> 
    );
};

export default App;