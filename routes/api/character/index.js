'use strict';

const 
    express = require('express'),
    router = express.Router();

//Accessing all types of character routes
const 
    singleCharDBFunctions = require('./singleCharacter'),
    singleCharacter = singleCharDBFunctions(),
    multipleCharDBFunctions = require('./multipleCharacter'),
    multipleCharacter = multipleCharDBFunctions();

//api routes for multiple characters, 
//route point: /character/all
router.get('/all', multipleCharacter.getAll);

//api routes for single characters,
//route point: /character/single
router.route('/single')
    .post(singleCharacter.post)
    .get(singleCharacter.get)
    .delete(singleCharacter.delete)
    .put(singleCharacter.update);
//End of Functions

module.exports = router;
