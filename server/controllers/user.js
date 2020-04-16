// ----------------------------------------------------------------------------
// External Dependencies
// ----------------------------------------------------------------------------
const router = require('express').Router();

// ----------------------------------------------------------------------------
// Internal Dependencies
// ----------------------------------------------------------------------------
const connection = require('../services/database');

// ----------------------------------------------------------------------------
// Endpoints
// ----------------------------------------------------------------------------

// @route GET /api/user/
// @desc ???
// @access Public
router.post('/', (req, res, next) => {
  // console.log("test")
  // const query = "show tables;"
  const query = req.body.query;
  connection.connect(function() {
    connection.query('USE main;');
    connection.query(query, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      
      if (result) res.send(result);
    });
  });
});

module.exports = router;
