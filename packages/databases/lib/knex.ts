import * as createKnex from "knex";
import * as path from "path";

// @ts-ignore
const knexFile = require("../knexfile")[process.env.NODE_ENV || "development"];

export const knex = createKnex(knexFile);

export const migrate: () => any = () =>
  knex.migrate.latest({
    directory: path.resolve(__dirname, "../migrations")
  });

export default knex;
