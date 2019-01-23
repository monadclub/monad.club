import { makeExecutableSchema } from "graphql-tools";
import { merge } from "lodash";
import { logGraphql } from "@monad.club/utils";
import createGraphQLLogger from "graphql-log";
import * as candidate from "./candidate";
import * as company from "./company";
import * as companyUser from "./company-user";
import * as global from "./global";
import * as skill from "./skill";
import * as experience from "./experience";
import * as jobSpec from "./job-spec";
import * as sideProject from "./side-project";
import * as contentLink from "./content-link";

const resolvers = merge(
  global.resolvers,
  jobSpec.resolvers,
  experience.resolvers,
  sideProject.resolvers,
  skill.resolvers,
  candidate.resolvers,
  company.resolvers,
  companyUser.resolvers,
  contentLink.resolvers
);

const typeDefs = [
  global.typeDefs,
  jobSpec.typeDefs,
  sideProject.typeDefs,
  experience.typeDefs,
  skill.typeDefs,
  candidate.typeDefs,
  company.typeDefs,
  companyUser.typeDefs,
  contentLink.typeDefs
];

// Add logger to all resolvers
createGraphQLLogger({
  logger: logGraphql
})(resolvers);

const schema = makeExecutableSchema({
  resolvers,
  typeDefs
});

export default schema;
