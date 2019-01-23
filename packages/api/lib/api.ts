import dotenv from "dotenv";
import { ApolloServer } from "apollo-server";
import { logInfo } from "@monad.club/utils";
import schema from "./schema";
import createContext from "./utils/create-context";

dotenv.config();

const server = new ApolloServer({
  schema,
  context: createContext
});

const port = process.env.PORT || 4000;
server.listen(port).then(({ url }) => {
  logInfo(`👋  GraphQL server started at ${url}`);
});
