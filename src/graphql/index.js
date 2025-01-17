const { join } = require("path");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

const allTypes = loadFilesSync(join(__dirname, "**", "*.gql"));
const allResolvers = loadFilesSync(join(__dirname, "**", "resolvers.js"));

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

module.exports = {
  typeDefs,
  resolvers,
};
