import React from 'react';

import useApp from '../hooks/useApp';

import "../styles/App.css";

const App = () => {
  const [handleButtonClick, handleOnChange, renderResponse, disabled, handleDate1Change, handleDate2Change, handleDateClick, handleQuery1, handleQuery2, handleQuery3] = useApp();
  return (
    <div>
      <div style={{padding: "10px"}}>
        <input type="text" onChange={handleOnChange} style = {{width: "1000px"}} placeholder="General querys here"/>
        <button onClick={handleButtonClick} disabled={disabled}>Submit</button>
      </div>

      <div className="dateStyle">
        Show accidents from
        <input type="text" onChange={handleDate1Change} style = {{width: "150px"}} placeholder="Date in YYYY-MM-DD"/>
        to
        <input type="text" onChange={handleDate2Change} style = {{width: "150px"}} placeholder="Date in YYYY-MM-DD"/>
        <button onClick={handleDateClick} disabled={disabled}> Display accidents between two dates </button> 
      </div>

      <div className="preGenButtons">
        <button onClick={handleQuery1} disabled={disabled}> Chance of casualty based on contibuting factor </button>
        <button onClick={handleQuery2} disabled={disabled}> Chance of casualty (Jan) </button>
        <button onClick={handleQuery3} disabled={disabled}> Chance of casualty between 2 dates </button>
        {/* <button onClick={() => handleQuery(query6)} disabled={disabled}> Query6 </button>
        <button onClick={() => handleQuery(query7)} disabled={disabled}> Query7 </button>
        <button onClick={() => handleQuery(query8)} disabled={disabled}> Query8 </button>
        <button onClick={() => handleQuery(query9)} disabled={disabled}> Query9 </button>
        <button onClick={() => handleQuery(query10)} disabled={disabled}> Query10 </button> */}
      </div>

      <div style={{padding: "10px"}}>
        <table> {renderResponse()} </table>
      </div>
    </div> 
  );
};

export default App;