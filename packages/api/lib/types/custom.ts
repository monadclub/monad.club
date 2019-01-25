import getLoaders from "../loaders";
import { PageInfo } from "../generated/graphql";

export interface IContext {
  req: Request;
  userId: string;
  loaders: ReturnType<typeof getLoaders>;
}

export type Resolver<ReturnType, ArgsType, RootType = {}> = (
  root: RootType,
  args: ArgsType,
  context: IContext
) => ReturnType | Promise<ReturnType>;

export interface PaginatedResult<ReturnType> {
  pageInfo: PageInfo;
  edges: (ReturnType)[];
}
