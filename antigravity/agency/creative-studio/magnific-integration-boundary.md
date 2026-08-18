# Magnific Integration Boundary — Website Independence

Magnific is a creative tool used by the agency workflow to produce candidate
imagery. It is **not** storefront infrastructure, and the website must
function completely independently of it.

## Hard boundary

Magnific must NEVER:
- run inside a React component
- run inside a Next.js server action
- run during static generation
- run during `pnpm build`
- run during deployment
- be required for the website to load or function

If Magnific becomes unavailable — quota exhausted, service down, MCP
disconnected — **the storefront continues working normally**. No page
depends on a live Magnific connection at request time or build time.

## Why this boundary exists

1. **Reliability.** A creative tool going down should never take the store
   down with it.
2. **Cost control.** Coupling generation to build/deploy would mean every
   CI run, every preview deployment, and every `pnpm dev` session could
   spend credits. Generation only happens when a human explicitly runs the
   creative-studio workflow.
3. **Review integrity.** The approval workflow (see `approval-workflow.md`)
   only works if generation is a deliberate, out-of-band step with a human
   checkpoint before anything reaches `public/images/`. Runtime coupling
   would bypass that entirely.

## How this is actually enforced today

- No file under `app/`, `components/`, or `lib/` imports or calls anything
  Magnific-related. This is a documented convention, not a technical lock —
  it depends on whoever adds code respecting it.
- All Magnific interaction happens through direct MCP tool calls in an
  agent session (this creative-studio workflow), never through application
  code shipped to the website.
- Approved assets are plain static files in `public/images/<category>/`,
  served the same way any other image asset is — nothing about them at
  runtime reveals or depends on how they were produced.

## What would violate this boundary

Any of the following would need explicit sign-off before ever being built,
since they'd change this document's guarantee:
- A server action that calls a Magnific MCP tool or its underlying API.
- A build script that generates or fetches images at build time.
- A runtime feature ("generate an image for me") exposed to site visitors.
- Any `.env` variable wiring a Magnific API key into the deployed app.

None of these exist today. This document exists so that stays visible and
intentional if it's ever reconsidered.
