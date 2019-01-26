import { makeExecutableSchema } from "graphql-tools";
import { merge } from "lodash";
import { logGraphql } from "@monad.club/utils";
import createGraphQLLogger from "graphql-log";
import * as candidateProfile from "./candidate-profile";
import * as company from "./company";
import * as user from "./user";
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
  candidateProfile.resolvers,
  company.resolvers,
  user.resolvers,
  contentLink.resolvers
);

const typeDefs = [
  global.typeDefs,
  jobSpec.typeDefs,
  sideProject.typeDefs,
  experience.typeDefs,
  skill.typeDefs,
  candidateProfile.typeDefs,
  company.typeDefs,
  user.typeDefs,
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
