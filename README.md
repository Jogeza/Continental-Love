# Continental Love

Continental Love is a premium lifestyle and commerce experience connecting
Ugandan origin and craftsmanship with an Italian and European audience. The
storefront is built with Next.js and uses Shopify for products, carts, and
checkout.

## Local development

Requirements: Node.js and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Catalog modes

Without Shopify configuration, the storefront uses local mock products so
catalog, collection, and product pages remain available for design review.
Purchasing is disabled in this preview mode; it does not create a fake cart or
checkout.

To use live Shopify commerce, copy `.env.example` to `.env.local` and replace
the placeholders with values for your store:

- `SHOPIFY_STORE_DOMAIN`: Shopify store domain, such as
  `your-store.myshopify.com`
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN`: Storefront API access token
- `SHOPIFY_REVALIDATION_SECRET`: shared secret used to authenticate product and
  collection revalidation webhooks

Do not commit `.env.local` or real credentials.

The revalidation webhook accepts `POST /api/revalidate?secret=...` and uses the
`x-shopify-topic` header to invalidate product or collection cache tags.

## Verification

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

No automated test suite is currently configured.
