'use strict';

const servicePort = 6262,
    domain = `localhost`;

const config = {
    "servicePort": servicePort,
    apiRoot : `http://${domain}:${servicePort}`
};

module.exports = config;
