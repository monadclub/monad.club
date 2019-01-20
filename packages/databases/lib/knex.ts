import createKnex from 'knex';
import knexFile from '../knexfile';

export const knex = createKnex(knexFile);
export default knex;
