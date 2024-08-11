## Get Started

1. Clone the repository
2. Use [Bun](https://bun.sh/) (Recommended)
3. Install dependencies `bun install`
4. Run development server `bun run dev`, Refer package.json for more details.

## Packages used

- [Auth](https://authjs.dev/)
- [Drizzle](https://orm.drizzle.team/docs/overview/)
- [Chakra UI](https://v2.chakra-ui.com/getting-started/)
- [Next](https://nextjs.org/)

----

- Auth Edge compatibility Docs [here](https://authjs.dev/getting-started/migrating-to-v5#edge-compatibility)

- Credits: [Ajmal](https://ajmalshahaudeen.vercel.app)

---
---
Docs
---

This is a demo online shopping web-application. Using Next.js and other cool stuffs.

- Drizzle config - `drizzle.config.ts`
- Drizzle Schema - `drizzle/schema.ts`
- Auth config - `auth.config.ts`
- Auth routes - `app/api/auth/[...nextauth]/route.ts`
- Auth middleware - `middleware.ts`
- tailwind config - `tailwind.config.ts`
- .env example 
```
AUTH_DRIZZLE_URL="postgresql://username:password@localhost:5432/dbname"
AUTH_SECRET="secret key" -- run `bun x auth secret` to generate
AUTH_GOOGLE_ID= google client id -- found in google console
AUTH_GOOGLE_SECRET= google client secret -- found in google console
```
