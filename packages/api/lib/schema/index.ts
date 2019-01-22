import { makeExecutableSchema } from "graphql-tools";
import { merge } from "lodash";
import { logGraphql } from "@monad.club/utils";
import createGraphQLLogger from "graphql-log";
import * as candidate from "./candidate";
import * as global from "./global";

const resolvers = merge(candidate.resolvers);
const typeDefs = [global.typeDefs, candidate.typeDefs];

const logExecutions = createGraphQLLogger({
  logger: logGraphql
});
logExecutions(resolvers);

const schema = makeExecutableSchema({
  resolvers,
  typeDefs
});

export default schema;
