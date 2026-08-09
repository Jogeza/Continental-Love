# Phase 2, Milestone 1 — Cart integrated into the Continental Love Navbar

One commit on top of `5c4e4258` (Phase 1).

## Apply it

```bash
git fetch /path/to/m1-cart-navbar-integration.bundle HEAD:phase-2-m1
git merge phase-2-m1
pnpm install
pnpm build
```

## What changed (5 files, 38/21 lines)

- **`app/layout.tsx`** — wraps the existing `<Navbar />{children}<Footer />` in
  `CartProvider`. `cartPromise` only calls the real `getCart()` when
  `SHOPIFY_STORE_DOMAIN` is set; otherwise resolves to `undefined`, so the app
  stays usable and the build stays green before real Shopify credentials exist.
  `lib/shopify` itself is untouched.
- **`components/layout/Navbar.tsx`** — added one line, `<CartModal />`, to the
  existing action area. No structural change, no new nav system, brand links
  untouched.
- **`components/cart/modal.tsx`**, **`open-cart.tsx`** — token-only restyle
  (Forest Green / Heritage Gold / Ivory / Charcoal replacing Vercel's
  black/blue-600/neutral/dark: defaults). Structure and logic untouched —
  this is the minimum needed so the cart doesn't look visually foreign next to
  the CL navbar; the full design-system pass is a later milestone.
- **`next.config.ts`** — added `cacheComponents: true`.

## The one real (non-network) issue this surfaced

Wiring `getCart()` into the layout was the first time anything in
`lib/shopify/index.ts` actually entered the live import graph. That file uses
Next.js 16's `"use cache"` / `cacheTag` / `cacheLife` directives throughout
(not just in `getCart`), which only compile with the `cacheComponents` config
flag enabled — confirmed against the Next 16 docs bundled in
`node_modules/next/dist/docs`, per `AGENTS.md`'s instruction to check there for
breaking changes. Without it, the build failed with 10 errors across every
cached function in the file. Fixed with one line in `next.config.ts`.

## Verification

- `pnpm install` — clean
- `pnpm exec tsc --noEmit` — 0 errors
- `pnpm build` — 0 code errors (10 → 0 after the `cacheComponents` fix). The
  only remaining output is `next/font/google` failing to reach
  `fonts.googleapis.com` — confirmed via direct `curl` to be this sandbox's
  egress proxy (`x-deny-reason: host_not_allowed`), not a code defect. Same
  known limitation as Phase 1; will build cleanly wherever Google Fonts is
  reachable.
- `pnpm exec eslint .` — 18 pre-existing issues, identical count and identical
  locations before/after this commit. None introduced.

## Untouched

`components/_deprecated/*` (still deprecated, not restored, not deleted —
per your instruction), `components/brand/Logo.tsx`, `components/home/*`,
brand colors, typography, all other files.

## Next milestone (not started — waiting for your go-ahead)

Milestone 2: reusable commerce components matching the CL design system
(Card, ProductCard, Price, etc.), still without touching the Navbar, Logo, or
home page storytelling.
