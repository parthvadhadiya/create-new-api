'use strict'

const Router = require('koa-router')
const router = new Router({})

const Pannel = require('../pannels/Pannel')
const pannel = new Pannel()

router.get('/',pannel.index)

/*
/ Export router
 */
module.exports = router