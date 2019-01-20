import * as createKnex from "knex";

const knexFile = require("../knexfile");

export const knex = createKnex(knexFile);
export default knex;
