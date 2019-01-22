import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import { logInfo } from "@monad.club/utils";
import schema from "./schema";

dotenv.config();

const createContext = ({ req, ...context }: any) => ({
  ...context,
  req
});

const server = new ApolloServer({
  schema,
  context: createContext
});

const port = process.env.PORT || 4000;
server.listen(port).then(({ url }) => {
  logInfo(`👋  GraphQL server started at ${url}`);
});
