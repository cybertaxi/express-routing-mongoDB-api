'use strict';

const
    express = require('express'),
    // companyRoute = require('./company'),
    characterRoute = require('./character');

let router = express.Router();

//Work-in-progress for company api...
// router.use('/company', companyRoute);
router.use('/character', characterRoute);

module.exports = router;