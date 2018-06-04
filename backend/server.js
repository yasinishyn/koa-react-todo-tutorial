const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const BodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')

const app = new Koa()
const router = new Router()

if (process.env.NODE_ENV === 'development') {
  app.use(Logger())
}

app.use(BodyParser())

// API routes
require('./routes')(router)
app.use(router.routes())
app.use(router.allowedMethods())

app.use(require('koa-static')('./build'))


mongoose.connect(process.env.DATABASE)

module.exports = app
