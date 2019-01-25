import { Database, knex } from "@monad.club/databases";
import { IContext } from "../types/custom";
import { MutationResolvers, QueryResolvers } from "../generated/graphql";
import paginateQuery from "../utils/paginate-query";

export const getById = (
  id: string,
  ctx: IContext
): Promise<Database.candidates> => ctx.loaders.candidate.load(id);

export const getPage = (args: QueryResolvers.CandidatesArgs) =>
  paginateQuery<Database.candidates>(knex("candidates"), args.page);

export const updateCandidate = (
  args: MutationResolvers.UpdateCandidateArgs,
  ctx: IContext
) => ctx.loaders.candidate.load(args.candidate.id);
