import { ApolloServer } from "apollo-server";
import gql from "graphql-tag";
import { knex } from "@monad.club/databases";
import { logGraphql, logInfo } from "@monad.club/utils";
import createGraphQLLogger from "graphql-log";

require("dotenv").config();

const resolvers = {
  Query: {
    testDbConnection: async () => {
      const {
        rows: [row]
      } = await knex.raw(`SELECT 1 as one`);
      return row.one;
    },
    hello: () => `heya there`
  }
};

const logExecutions = createGraphQLLogger({
  logger: logGraphql
});
logExecutions(resolvers);

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      testDbConnection: Int
      hello: String
    }
  `,
  resolvers
});

const port = process.env.PORT || 4000;
server.listen(port).then(({ url }) => {
  logInfo(`👋  GraphQL server started at ${url}`);
});
