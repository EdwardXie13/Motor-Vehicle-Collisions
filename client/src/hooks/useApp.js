import React, { useState, useCallback } from 'react';
import server from '../apis/server';

export default () => {
  const [query, setQuery] = useState('');
  const [date1, setDate1] = useState('')
  const [date2, setDate2] = useState('')
  const [response, setResponse] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleOnChange = e => {
    setQuery(e.target.value);
  }

  const handleDate1Change = e => {
    setDate1(e.target.value);
    console.log(date1)
  }

  const handleDate2Change = e => {
    setDate2(e.target.value);
    console.log(date2)
  }

  const handleButtonClick = () => {
    setDisabled(true);
    server.post('/user', { query: query })
      .then(res => {
        setResponse(res.data);
        setDisabled(false);
      })
      .catch(err => {
        setResponse([{error: err.response.data.sqlMessage}]);
        setDisabled(false);
    });
  }

  const handleDateClick = () => {
    setDisabled(true);
    let temp = `select * from Accident where CrashDate > '${date1}' and CrashDate < '${date2}' order by CrashDate`
    console.log(temp)
    server.post('/user', { query: temp })
      .then(res => {
        setResponse(res.data);
        setDisabled(false);
      })
      .catch(err => {
        setResponse([{error: err.response.data.sqlMessage}]);
        setDisabled(false);
    });
  }
  const handleQuery = (input) => {
    setDisabled(true);
    server.post('/user', { query: input })
      .then(res => {
        setResponse(res.data);
        setDisabled(false);
      })
      .catch(err => {
        setResponse([{error: err.response.data.sqlMessage}]);
        setDisabled(false);
    });
  }

  const renderResponse = () => {
    if (!response.length) return null;

    let result = [];
    let entry = [];

    // Table Headers
    for (let key in response[0]) {
      entry.push(<th>{key}</th>)
    }

    result.push(<tr>{entry}</tr>);
    entry = [];

    for (let row of response) {
      entry = Object.values(row).map(r => <td>{r}</td>);

      result.push(<tr>{entry}</tr>);
      entry = [];
    }

    return result;
    // return response.length > 0 ? response.map(r => {
    //   return Object.entries(r).map(entry => {
    //     return <div>{entry[0]}: {entry[1]}</div>
    //   });
    // }) : null;
  };

  // [{}, {}, {}, ...]
  // [[<div>...</div>], [], [], ...]

  return [handleButtonClick, handleOnChange, renderResponse, disabled, handleDate1Change, handleDate2Change, handleDateClick, handleQuery];
}