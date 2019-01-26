import { Database, knex } from "@monad.club/databases";
import { IContext, ID } from "../types/custom";
import { MutationResolvers, QueryResolvers } from "../generated/graphql";
import paginateQuery from "../utils/paginate-query";

export const getById = (id: ID, ctx: IContext): Promise<Database.candidates> =>
  ctx.loaders.candidate.load(id);

export const getPage = (args: QueryResolvers.CandidatesArgs) =>
  paginateQuery<Database.candidates>(knex("candidates"), args.page);

export const updateCandidate = async (
  args: MutationResolvers.UpdateCandidateArgs,
  ctx: IContext
): Promise<Database.candidates | undefined> => {
  await knex("candidates")
    .update(args.candidate)
    .where({ id: ctx.userId });
  return knex("candidates")
    .where({ id: ctx.userId })
    .first();
};
