import { Candidate } from "../generated/graphql.d";

export const getById = (id: string, ctx: any) => ctx.loaders.candidate.load(id);
export const getPage = () => {};
export const updateCandidate = (): Candidate => null as any;
