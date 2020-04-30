import React from 'react';

import useApp from '../hooks/useApp';

import "../styles/App.css";

const App = () => {
  const [handleButtonClick, handleOnChange, renderResponse, disabled, handleDate1Change, handleDate2Change, handleDateClick, handleQuery] = useApp();
  let query1 = "";
  let query2 = "";
  let query3 = "";
  let query4 = "";
  let query5 = "";
  let query6 = "";
  let query7 = "";
  let query8 = "";
  let query9 = "";
  let query10 = "";
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
        <button onClick={handleDateClick} disabled={disabled}> Submit </button> 
      </div>

      <div className="preGenButtons">
        <button onClick={() => handleQuery(query1)} disabled={disabled}> Query1 </button>
        <button onClick={() => handleQuery(query2)} disabled={disabled}> Query2 </button>
        <button onClick={() => handleQuery(query3)} disabled={disabled}> Query3 </button>
        <button onClick={() => handleQuery(query4)} disabled={disabled}> Query4 </button>
        <button onClick={() => handleQuery(query5)} disabled={disabled}> Query5 </button>
        <button onClick={() => handleQuery(query6)} disabled={disabled}> Query6 </button>
        <button onClick={() => handleQuery(query7)} disabled={disabled}> Query7 </button>
        <button onClick={() => handleQuery(query8)} disabled={disabled}> Query8 </button>
        <button onClick={() => handleQuery(query9)} disabled={disabled}> Query9 </button>
        <button onClick={() => handleQuery(query10)} disabled={disabled}> Query10 </button>
      </div>

      <div style={{padding: "10px"}}>
        <table> {renderResponse()} </table>
      </div>
    </div> 
  );
};

export default App;