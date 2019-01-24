import { updateCandidate, getById } from "../../models/candidate";
import { MutationResolvers } from "../../generated/graphql";
import { IContext } from "../../types/custom";

const resolvers = {
  Mutation: {
    updateCandidate: () => updateCandidate()
  } as Partial<MutationResolvers.Resolvers<IContext>>,
  Query: {
    // @ts-ignore
    candidate: (_, args, ctx) => getById(args.id, ctx),
    candidates: () => {}
  }
};

export default resolvers;
