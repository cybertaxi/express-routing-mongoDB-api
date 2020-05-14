'use strict';

const
    express = require('express'),
    expressHandlebars = require('express-handlebars'),
    cors = require('cors'),
    bodyParser = require('body-parser');

module.exports = function() {
    let server = express(),
        create,
        start;

    create = function(config) {
        let routes = require('../routes');

        // Setting for Servers
        server.set('port', config.port);
        server.set('hostname', config.hostname);    

        // Returns middleware that parses json
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));

        // Adopt CORS
        server.use(cors());

        // Setting up routes
        routes.init(server);
    };

    start = function() {
        let hostname = server.get('hostname'),
            port = server.get('port');

        server.listen(port, function () {
            console.log('Express server running on - http://' + hostname + ':' + port);
        });
    };

    return {
        create: create,
        start: start
    };
};