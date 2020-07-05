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
  
  const handleQuery1 = () => {
    setDisabled(true);
    // let temp = `select count(*) from Accident where CrashDate > '${date1}' and CrashDate < '${date2}' order by CrashDate`
    //chance of casualty based on contributing factor from staten island of 2019
    let query = `select ContributingFactor, count(*) as occurrences, sum(PersonsInjured), sum(PersonsKilled), sum(PersonsInjured)/count(*)*100 as percentage_chance_of_injury, sum(PersonsKilled)/count(*)*100 as percentage_chance_of_death from (VehicleInAccident inner join Accident on VehicleInAccident.CollisionID = Accident.CollisionID) inner join Casualties on Casualties.CollisionID = Accident.CollisionID group by ContributingFactor order by occurrences desc`
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

  const handleQuery2 = () => {
    setDisabled(true);
    // let query = `select * from Casualties cross join (select CollisionID from Accident where CrashDate > '${date1}' and CrashDate < '${date2}') as a on Casualties.CollisionID = a.CollisionID`
    let query = `select ContributingFactor, count(*) as occurrences, sum(PersonsInjured), sum(PersonsKilled), sum(PersonsInjured)/count(*)*100 as percentage_chance_of_injury, sum(PersonsKilled)/count(*)*100 as percentage_chance_of_death from (VehicleInAccident inner join Accident on VehicleInAccident.CollisionID = Accident.CollisionID) inner join Casualties on Casualties.CollisionID = Accident.CollisionID where month(CrashDate) = 1 group by ContributingFactor order by occurrences desc`
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

  const handleQuery3 = () => {
    setDisabled(true);
    // let query = `select sum(PersonsInjured), sum(PersonsKilled) from Casualties cross join (select CollisionID from Accident where CrashDate > '${date1}' and CrashDate < '${date2}') as a on Casualties.CollisionID = a.CollisionID`
    let query = `select ContributingFactor, count(*) as occurrences, sum(PersonsInjured), sum(PersonsKilled), sum(PersonsInjured)/count(*)*100 as percentage_chance_of_injury, sum(PersonsKilled)/count(*)*100 as percentage_chance_of_death from (VehicleInAccident inner join Accident on VehicleInAccident.CollisionID = Accident.CollisionID) inner join Casualties on Casualties.CollisionID = Accident.CollisionID where date(CrashDate) > '${date1}' and date(CrashDate) < '${date2}' group by ContributingFactor order by occurrences desc`
    server.post('/user', { query: query})
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

  return [handleButtonClick, handleOnChange, renderResponse, disabled, handleDate1Change, handleDate2Change, handleDateClick, handleQuery1, handleQuery2, handleQuery3];
}