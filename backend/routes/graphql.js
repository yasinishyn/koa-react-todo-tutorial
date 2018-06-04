const Router = require('koa-router')
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa')

import schema from '../data/schema'


const router = new Router()

// koaBody is needed just for POST.
router.post('/graphql', graphqlKoa({ schema: schema }));
router.get('/graphql',  graphqlKoa({ schema: schema }));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

module.exports = router.routes()
