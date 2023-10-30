// connecting our filles to the apollo server  
const { ApolloServer} = require("apollo-server");

const {typeDefs} = require("./schema/type-defs");

const {resolvers} = require("./schema/type-defs");

const server = new ApolloServer({typeDefs, resolvers, 
    // context is used most importantly for authentication and authorization. it returns an object
    context: ({req}) =>{
    return {req};
},
});

server.listen().then(({url}) => {
    console.log("YOUR API IS RUNNING AT: ${url}:)");

});