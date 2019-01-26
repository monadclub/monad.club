import { knex } from "@monad.club/databases";
import { IContext, ID } from "../types/custom";
import getLoaders from "../loaders";

export const getTestContext = (userId: ID): IContext => ({
  userId,
  loaders: getLoaders()
});

export const tearDownTest = async () => {
  await knex.destroy();
};
