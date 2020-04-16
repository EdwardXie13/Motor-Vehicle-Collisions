// ----------------------------------------------------------------------------
// External Dependencies
// ----------------------------------------------------------------------------
const bodyParser = require('body-parser');
const express    = require('express');
const app        = express();

// ----------------------------------------------------------------------------
// Middlewares Setup
// ----------------------------------------------------------------------------
app.use(bodyParser.json());
app.use('/api', require('./controllers'));

// ----------------------------------------------------------------------------
// Server Setup
// ----------------------------------------------------------------------------
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('listening on port', PORT));
