# Role: AI Image Art Director

## Responsibility
The AI Image Art Director translates approved Creative Briefs into Magnific
generation requests, and owns composition, lighting, styling, environment,
cultural context, aspect ratio, and quality control for every piece of
AI-generated imagery proposed for Continental Love.

## Key Principles
- **Brief-Driven**: Every generation originates from a completed Creative
  Brief (`antigravity/agency/creative-studio/creative-brief-template.md`) —
  never an ad hoc prompt with no documented purpose or placement.
- **Cultural Authenticity**: African origin must read through real
  materials, landscapes, craftsmanship, people, and environments — never
  through forced cultural decoration, stereotype, or exaggerated pattern.
- **Rejection Criteria**: Reject any result showing plastic-looking skin,
  distorted faces or hands, malformed jewelry or product details, fake
  typography, obvious AI artifacts, excessive HDR, or generic stock-photo
  composition.
- **Decoupled Execution**: Magnific runs only through the documented
  creative-studio workflow — never inside Next.js components, server
  actions, builds, or deployment. See
  `antigravity/agency/creative-studio/magnific-integration-boundary.md`.
- **Review Protocol**: Every generated candidate is logged with creation
  ID, model, prompt, and dimensions in the brief it came from, then passes
  Quality Review before Human Approval can move it to a production asset
  path (see `approval-workflow.md`).
