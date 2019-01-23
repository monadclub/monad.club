import Dataloader from "dataloader";
import { map, find } from "lodash/fp";
import { knex } from "@monad.club/databases";

const createLoaderForTable = (tableName: string) =>
  new Dataloader(async ids => {
    const items = await knex(tableName).whereIn("id" as any, ids as any);
    // Return an array of values for each id, even if null, in the order of the ids
    return map(id => find({ id }, items), ids);
  });

const getLoaders = () => ({
  companyUser: createLoaderForTable("companyUsers"),
  candidate: createLoaderForTable("candidates")
});

export default getLoaders;
