import { knex } from "@monad.club/databases";
import { IContext, ID } from "../types/custom";
import getLoaders from "../loaders";

export const getTestContext = (userId: ID): IContext => ({
  userId: userId || "1",
  loaders: getLoaders()
});

export const tearDownTest = async () => {
  await knex.destroy();
};
