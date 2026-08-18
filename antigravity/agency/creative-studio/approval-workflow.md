# Continental Love — Creative Asset Approval Workflow

Generated imagery never automatically becomes production imagery. This is
the full path from idea to a file the website actually uses.

```
Creative Director
   down (defines the need, sets brand-fit expectations)
Creative Brief
   down (creative-brief-template.md, filled in completely)
AI Image Art Director
   down (translates brief into a Magnific generation request)
Magnific
   down (generates candidate image(s), out-of-band from the website)
Generated
   down (saved to public/images/_generated/<category>/, Execution Record filled in)
Quality Review
   down (checklist in the brief, done by AI Image Art Director or a human reviewer)
Human Approval
   down (explicit sign-off, required, no exceptions)
Production Asset
   down (moved to public/images/<category>/, referenced by a component)
Next.js
```

## Stage details

### 1. Generated
Assets land in `public/images/_generated/<category>/` (see
`generated-assets.md` for the folder structure) using the naming convention
in that same document. At this stage a file existing in `_generated/` means
**nothing has been approved yet** — it is a candidate, not an asset.

### 2. Quality Review
Run through the Quality Review checklist in the brief. Reject anything
showing the defects listed in Negative Requirements. A rejected candidate
either gets regenerated with an adjusted brief, or the brief itself gets
reconsidered — don't just retry the same prompt hoping for a better roll
without understanding why it failed.

### 3. Human Approval
**Mandatory. Never skipped, never automatic.** A human, not an agent, signs
off that the image is ready to represent the brand publicly. Record who
approved it and when, directly in the brief's Human Approval section.

### 4. Production Asset
Only after Human Approval does a file move from `_generated/<category>/` to
`public/images/<category>/`. This move:
- **Never overwrites an existing production image.** If a slot is already
  filled, the new asset needs a different filename or an explicit decision
  to retire the old one — that decision belongs to the Creative Director,
  not to whoever is doing the file move.
- Uses the naming convention from `generated-assets.md`, not the working
  filename from the generation stage.
- Is the point where a component is allowed to reference the image. Before
  this stage, no `import`, no `<Image src>`, no code reference of any kind
  should point at a `_generated/` path.

## What this workflow deliberately does not do

It does not run inside the website. Nothing here executes during
`pnpm dev`, `pnpm build`, or deployment — see
`magnific-integration-boundary.md`. If Magnific is ever unavailable, the
website keeps working; this workflow simply can't produce new candidates
until it's back.
