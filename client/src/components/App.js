import React from 'react';

import useApp from '../hooks/useApp';

import "../styles/App.css";

const App = () => {
    const [handleButtonClick, handleOnChange, renderResponse, disabled] = useApp();

    return (
        <div>
            <input type="text" onChange={handleOnChange} style = {{width: "1000px"}}/>
            <button onClick={handleButtonClick} disabled={disabled}>Meow</button>
            <table>
                {renderResponse()}
            </table>
        </div> 
    );
};

export default App;