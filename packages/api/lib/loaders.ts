import Dataloader from "dataloader";
import { map, find } from "lodash/fp";
import { knex, Database } from "@monad.club/databases";

type ID = string | number;

const createLoaderForTable = <ResultItemType>(tableName: string) =>
  new Dataloader<ID, ResultItemType>(async (ids: Array<ID>) => {
    const items: Array<ResultItemType> = await knex(tableName).whereIn(
      "id",
      ids
    );
    // Return an array of values for each id, even if null, in the order of the ids
    return map(id => find({ id }, items) || null, ids) as Array<ResultItemType>;
  });

const getLoaders = () => ({
  companyUser: createLoaderForTable<Database.companyUsers>("companyUsers"),
  candidate: createLoaderForTable<Database.candidates>("candidates")
});

export default getLoaders;
