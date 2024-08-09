import { defineConfig } from "drizzle-kit"

export default defineConfig({
    schema: "./drizzle/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.AUTH_DRIZZLE_URL as string
    },
    verbose: true,
    strict: true
})