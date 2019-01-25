import { Database } from "@monad.club/databases";
import * as candidateModel from "../../models/candidate";
import { MutationResolvers, QueryResolvers } from "../../generated/graphql";
import { Resolver, PaginatedResult } from "../../types/custom";

type UpdateCandidate = Resolver<
  Database.candidates,
  MutationResolvers.UpdateCandidateArgs
>;

type CandidateResolver = Resolver<
  Database.candidates,
  QueryResolvers.CandidateArgs
>;

type CandidatesResolver = Resolver<
  PaginatedResult<Database.candidates>,
  QueryResolvers.CandidatesArgs
>;

const resolvers = {
  Mutation: {
    updateCandidate: ((_, args, ctx) =>
      candidateModel.updateCandidate(args, ctx)) as UpdateCandidate
  },
  Query: {
    candidate: ((_, args, ctx) =>
      candidateModel.getById(args.id, ctx)) as CandidateResolver,
    candidates: ((_, args) =>
      candidateModel.getPage(args)) as CandidatesResolver
  }
};

export default resolvers;
