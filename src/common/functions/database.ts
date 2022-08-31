import { Pool } from "pg";

const { DB, DB_PASSWORD, DB_USER, DB_PORT, DB_HOST } = process.env;
let pool: Pool;
if (!pool) {
  pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB,
    password: DB_PASSWORD,
    port: DB_PORT,
  });
}

export const dbPool: Pool = pool;
