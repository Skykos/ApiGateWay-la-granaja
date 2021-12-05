const {ApolloServer} = require('apollo-server');
const AccountAPI = require('./dataSources/account_api');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const authentication = require('./utils/authentication');



const server = new ApolloServer({
    context:authentication,
    typeDefs,
    resolvers,
    dataSources: ()=>({
        accountAPI: new AccountAPI()
    }),
    introspection:true,
    playground:true

});

server.listen(process.env.PORT || 4000).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
})
