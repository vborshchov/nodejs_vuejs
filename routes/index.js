const express = require('express');
const router  = express.Router();
const games   = require('./games.js');
const teams   = require('./teams.js');
const users   = require('./users.js');


/*
 * Routes that can be accessed by any one
 */
router.get('/games', games.getAll);
router.get('/teams', teams.getAll);
router.get('/users', users.getAll);

module.exports = router;