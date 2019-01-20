import { ApolloServer } from "apollo-server";
import gql from "graphql-tag";
import { knex } from "@monad.club/databases";
import { withEmoji } from "@monad.club/utils";

require("dotenv").config();

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      testDbConnection: Int
      hello: String
    }
  `,
  resolvers: {
    Query: {
      testDbConnection: async () => {
        const {
          rows: [row]
        } = await knex.raw(`SELECT 1 as one`);
        return row.one;
      },
      hello: () => withEmoji(`heya there`)
    }
  }
});

const port = process.env.PORT || 4000;
server.listen(port).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`👋  GraphQL server started at ${url}`);
});
