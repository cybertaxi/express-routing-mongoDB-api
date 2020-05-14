'use strict';

const apiRoute = require('./api');

function init(server) {
    server.use('/api', apiRoute);
}

module.exports = {
    init: init
};