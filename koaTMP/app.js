'use strict';
const koa = require('koa');
const bodyparser=require('koa-bodyparser');

const Router = require('koa-router');
const router = new Router()
const rootJunction = require('./routers/routes')

const app = module.exports = new koa();

const  cors = require('koa-cors')
app.use(cors())

app.use(bodyparser());

router.use(rootJunction.routes())
app.use(router.routes())
    .use(router.allowedMethods());

  app.listen(8080, ()=>{
      console.log(`Listening at....8080`)
  })

