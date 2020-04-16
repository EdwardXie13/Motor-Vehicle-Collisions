import React, { useState } from 'react';
import server from '../apis/server';

export default () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const handleOnChange = e => {
        setQuery(e.target.value);
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

    const renderResponse = () => {
        return response.length > 0 ? response.map(r => {
            return Object.entries(r).map(entry => {
                return <div>{entry[0]}: {entry[1]}</div>
            });
        }) : null;
    };

    // [{}, {}, {}, ...]
    // [[<div>...</div>], [], [], ...]

    return [handleButtonClick, handleOnChange, renderResponse, disabled];
}