# Continental Love — Creative Brief

## Campaign
Continental Love — Ugandan Coffee Editorial

## Purpose
Editorial photography for the Coffee storytelling sections of the site —
supporting imagery for the Brand Story coffee narrative and Coffee
collection editorial context. Distinct from the already-approved homepage
hero: this campaign builds out the surrounding editorial library, not a
replacement for it.

## Collection
Coffee

## Subject
Ugandan coffee origin: hand-harvested Arabica cherries, a farmer's hands at
work, traditional woven harvesting baskets, highland coffee terrain.

## Location
Ugandan highland coffee-growing region — rural, elevated terrain consistent
with Uganda's actual coffee belt (e.g. the Mount Elgon / Rwenzori growing
regions), not a generic or invented landscape.

## Cultural Context
Real Ugandan smallholder coffee agriculture: hand-harvesting ripe cherries
into traditional woven baskets, natural wooden processing surfaces, misty
highland terrain. Authenticity comes from correct material culture and
process, not from decorative motif.

## Styling
Natural work clothing appropriate to highland farm labor, traditional
woven baskets, raw cherry-stage and parchment-stage coffee. No branded
props, no staged luxury objects.

## Lighting
Golden early-morning natural light with soft highland mist diffusion.

## Composition
Mix of environmental/editorial-wide (for storytelling layout) and tighter
detail/macro framing (cherries, hands, beans) — variety intentional, since
this is a small library, not a single hero.

## Camera Perspective
Eye-level for the environmental frame; closer, more intimate perspective
for the detail frame.

## Mood
Warm, dignified, quietly luxurious, contemplative — not staged or
performative.

## Color Direction
Should sit naturally beside Forest Green / Heritage Gold / Coffee Brown /
Warm Ivory without literally containing brand colors as props.

## Background / Environment
Lush Ugandan highland coffee farm — terraced hillsides, native trees, soft
morning mist.

## Negative Requirements
No text, no logos, no watermark. No stereotypical African-luxury tropes
(excessive gold, fake palaces, generic safari imagery, exaggerated
patterns). No distorted faces or hands. No malformed baskets/objects. No
plastic-looking skin. No obvious AI artifacts. No excessive HDR. No
artificial-looking CGI.

## Aspect Ratio
4:5 — editorial/portrait orientation, distinct from the 16:9 hero, suited
to storytelling-section layout rather than a full-bleed banner.

## Intended Website Placement
Brand Story coffee-narrative section; Coffee collection editorial support.
Not the homepage hero.

---

## Review (Creative Director + AI Image Art Director, pre-generation)

- **Cultural authenticity check:** Subject/location/styling are grounded in
  actual Ugandan coffee agriculture, not decorative or invented — passes.
- **Brand-fit check:** Mood and color direction consistent with the
  established Forest Green/Heritage Gold/Ivory/Coffee Brown palette and
  the "editorial, restrained, timeless" visual direction — passes.
- **Redundancy check:** Distinct purpose and aspect ratio from the
  approved hero — not a duplicate request — passes.
- **Decision:** Approved to proceed to generation.

---

## Execution Record

| Candidate | Creation ID | Model | Resolution | Dimensions | Seed | Generated | Reference images |
|---|---|---|---|---|---|---|---|
| 01 | P3iRk9Y42C | seedream-5-pro | 2k | 1664x2496 | 940776 | 2026-08-09T14:32:05Z | none |
| 02 | gOJyuUnSXO | seedream-5-pro | 2k | 1664x2496 | 545549 | 2026-08-09T14:32:05Z | none |
| 03 | rglShjcxtc | seedream-5-pro | 2k | 1664x2496 | 210226 | 2026-08-09T14:32:06Z | none |

**Note on aspect ratio:** the brief specifies 4:5, but the actual generation
request used 2:3 (1664x2496, ratio 0.667 vs 4:5's 0.8) — an error in
translating the brief to the API call, not a deliberate deviation. Flagged
here rather than silently corrected after the fact.

## Quality Review

**Not completed by the AI Image Art Director / Claude this session.**
This sandbox's network egress restrictions block both `bash_tool` and
`web_fetch` from reaching `pikaso.cdnpk.net` (Magnific's asset CDN) — every
download attempt and every direct-view attempt failed. The `creations_show`
MCP widget renders the three candidates directly in the human reviewer's
UI, but that rendering isn't visible to Claude's own context, so no
genuine visual assessment against the checklist below was possible this
turn. Recording that gap here rather than fabricating a pass/fail.

- [ ] No plastic-looking skin — **not assessed**
- [ ] No distorted faces/hands — **not assessed**
- [ ] No malformed product/basket details — **not assessed**
- [ ] No fake typography — **not assessed**
- [ ] No obvious AI artifacts — **not assessed**
- [ ] No excessive HDR — **not assessed**
- [ ] Reads as authentic, not stereotyped — **not assessed**
- [ ] Matches Continental Love visual language — **not assessed**
- [ ] Composition matches intended placement — **not assessed** (also see aspect-ratio note above)

**Reviewer decision:** Pending — needs either human review via the
rendered widget, or Claude re-attempting with CDN access if the sandbox
network policy allows it.
**Notes:** Files also could not be saved into
`public/images/_generated/editorial/` this turn for the same network
reason — the folder currently still contains only `.gitkeep`. The failed
download attempt briefly wrote 3 placeholder files containing an error
message; these were deleted immediately, nothing broken was left behind.

---

## Retry — Execution Record (attempt 2)

Requested `aspectRatio: 4:5` explicitly this time. The Magnific API itself
returned an `adjustments` notice before generation started:
`"field":"aspectRatio","from":"4:5","to":"3:4","reason":"Mode seedream-5-pro
does not support 4:5; snapped to closest supported value."` — confirmed
against each candidate's own metadata below. This is a model capability
limit, not a repeat of attempt 1's input error.

| Candidate | Creation ID | Model | Requested ratio | Actual ratio | Dimensions | Seed | Generated |
|---|---|---|---|---|---|---|---|
| 04 | DoB8ALbpcl | seedream-5-pro | 4:5 | 3:4 (API-snapped) | 1728x2304 | 704762 | 2026-08-09T14:40:30Z |
| 05 | ksLlfYT16B | seedream-5-pro | 4:5 | 3:4 (API-snapped) | 1728x2304 | 279466 | 2026-08-09T14:40:30Z |
| 06 | 794N1BHJAL | seedream-5-pro | 4:5 | 3:4 (API-snapped) | 1728x2304 | 433898 | 2026-08-09T14:40:30Z |

**Staging:** attempted once via the same direct-download mechanism as
attempt 1 (no workaround). Failed identically:
`Host not in allowlist: pikaso.cdnpk.net`. Nothing written to
`public/images/_generated/editorial/` — still only `.gitkeep`.

**Quality Review:** not performed — same reasoning as attempt 1, no
mechanism available this session to actually view the images.

**Status: still not approved for promotion.** Two separate blockers now on
record: (1) neither attempt has produced the brief's specified 4:5 — the
model doesn't support it — and (2) file staging is blocked by sandbox
network policy regardless of ratio.

---

## Image Decision (Human, post-retry)

Candidates 04–06 (`DoB8ALbpcl`/704762, `ksLlfYT16B`/279466,
`794N1BHJAL`/433898, all 3:4 at 1728x2304) are accepted as **temporary
production candidates** — pending resolution of the staging blocker below,
since they still physically cannot be placed in
`public/images/_generated/editorial/` from this environment.

**The brief's Aspect Ratio requirement remains 4:5, unchanged.** This
decision does not amend the brief — it's a pragmatic acceptance of what
`seedream-5-pro` can actually produce for now. A future generation pass
with a model that genuinely supports 4:5 should still happen; when it
does, the resulting images are the ones intended to permanently fill this
placement, not the 3:4 candidates.

**Still blocked regardless of ratio decision:** staging into
`public/images/_generated/editorial/` requires `pikaso.cdnpk.net` access
this sandbox doesn't have. Until that's resolved, "accepted" candidates
exist only as Magnific creation IDs, not as files — website work proceeds
using local/placeholder assets in the interim, not these candidates.

## Human Approval
**Status:** Not yet reviewed by human — awaiting your decision.
