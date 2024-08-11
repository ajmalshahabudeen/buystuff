// import { drizzle } from "drizzle-orm/postgres-js";
import { drizzle } from "drizzle-orm/node-postgres";
import postgres from "postgres";
import * as schema from "@/drizzle/schema";
import { Client, Pool } from "pg";

// for query purposes
// const queryClient = postgres(process.env.AUTH_DRIZZLE_URL as string, {max: 1});
// export const db = drizzle(queryClient, { schema });

const pool = new Pool({
  connectionString: process.env.AUTH_DRIZZLE_URL as string,
});

export const db = drizzle(pool);
