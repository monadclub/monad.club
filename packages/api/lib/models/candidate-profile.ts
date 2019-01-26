import { Database, knex } from "@monad.club/databases";
import { IContext, ID } from "../types/custom";
import { MutationResolvers, QueryResolvers } from "../generated/graphql";
import paginateQuery from "../utils/paginate-query";

export const getById = (
  id: ID,
  ctx: IContext
): Promise<Database.candidateProfiles> => ctx.loaders.candidateProfile.load(id);

export const getPage = (args: QueryResolvers.CandidateProfilesArgs) =>
  paginateQuery<Database.candidateProfiles>(
    knex("candidateProfiles"),
    args.page
  );

export const updateCandidateProfile = async (
  args: MutationResolvers.UpdateCandidateProfileArgs,
  ctx: IContext
): Promise<Database.candidateProfiles | undefined> => {
  const user = await ctx.loaders.user.load(ctx.userId);
  // NOTE: returning() doesn't work in sqlite
  await knex("candidateProfiles")
    .update(args.candidateProfile)
    .where({ id: user.candidateProfileId });
  return knex("candidateProfiles")
    .where({ id: user.candidateProfileId })
    .first();
};
