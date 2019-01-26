import { Database } from "@monad.club/databases";
import * as candidateProfileModel from "../../models/candidate-profile";
import { MutationResolvers, QueryResolvers } from "../../generated/graphql";
import { Resolver, PaginatedResult } from "../../types/custom";

type UpdateCandidateProfile = Resolver<
  Database.candidateProfiles,
  MutationResolvers.UpdateCandidateProfileArgs
>;

type CandidateResolver = Resolver<
  Database.candidateProfiles,
  QueryResolvers.CandidateProfileArgs
>;

type CandidateProfilesResolver = Resolver<
  PaginatedResult<Database.candidateProfiles>,
  QueryResolvers.CandidateProfilesArgs
>;

const resolvers = {
  Mutation: {
    updateCandidateProfile: ((_, args, ctx) =>
      candidateProfileModel.updateCandidateProfile(
        args,
        ctx
      )) as UpdateCandidateProfile
  },
  Query: {
    candidateProfile: ((_, args, ctx) =>
      candidateProfileModel.getById(args.id, ctx)) as CandidateResolver,
    candidateProfiles: ((_, args) =>
      candidateProfileModel.getPage(args)) as CandidateProfilesResolver
  }
};

export default resolvers;
