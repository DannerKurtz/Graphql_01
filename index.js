const { ApolloServer, gql } = require("apollo-server");

/**
 * Scalar Types
 * Int
 * Float
 * String
 * Boolean
 * ID
 */
const { resolvers, typeDefs } = require("./src/graphql");

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

server.listen().then(({ url }) => {
  console.log("server on!: ", url);
});
