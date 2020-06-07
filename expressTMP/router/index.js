'use strict';

var express = require('express');
var router = express.Router();

const handler = require('../handler/main_handler');
const Handler = new handler();

router.get('/', function (req, res) {
    res.send('connection success...!')
});

// Following are all routes of API with their respective functions
router.get('/alive', Handler.alive);
// add your all router here.


router.all('*', (req,res) =>{ 
    res.status(502).send('BAD_GATEWAY')
})

module.exports = router;