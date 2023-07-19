const {ApolloServer} = require('apollo-server')
const { typeDefs } = require('./schema/typeDefs')
const { resolvers } = require('./schema/resolvers')

const graphqlApolloServer = new ApolloServer({typeDefs,resolvers})

graphqlApolloServer.listen().then(({url}) => {console.log(`application running on ${url}`)})

