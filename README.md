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

---
!!! Note
- The Client part --Which is the Client side and this repo-- is open source.
- The Admin part --Which is Admin Dashboard-- is not open to public. Please contact me if you want to purchase it.
- The mobile application --Which is the client side mobile app-- is not open to public. Please contact me if you want to purchase it.

--#-- Admin Dashboard:-

- Uses Nuxt 3 and Prisma ORM.
- Add, edit, delete categories, products, orders etc.
- Add, edit, delete users.
- Add, edit, delete reviews.
- Add, edit, delete discounts.
- Add, edit, delete coupons.
- Add, edit, delete payment methods.
- Add, edit, delete shipping methods.
- More coming...

--#-- Mobile App:-

- Uses Expo (React Native) - ios and android.
- Uses Honojs Backend and Prisma ORM.
- Everything included in web app.
- Flutter codebase coming soon...