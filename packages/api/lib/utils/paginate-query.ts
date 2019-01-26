import { QueryBuilder } from "knex";
import { PageInput } from "../generated/graphql";
import { PaginatedResult } from "../types/custom";

const paginateQuery = async <R = any>(
  query: QueryBuilder,
  page: PageInput
): Promise<PaginatedResult<R>> => {
  const [edges, [{ total }]] = await Promise.all([
    query
      .clone()
      .limit(page.limit)
      .offset(page.offset || 0),
    query.clone().count("* as total")
  ]);

  return {
    edges,
    pageInfo: {
      limit: page.limit,
      offset: page.offset || 0,
      total
    }
  };
};

export default paginateQuery;
