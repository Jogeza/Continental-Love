# Generated Asset Staging & Naming

## Folder structure

Every AI-generated candidate lands in `public/images/_generated/<category>/`,
never directly in a production folder:

```
public/images/_generated/editorial/
public/images/_generated/products/
public/images/_generated/campaigns/
public/images/_generated/lookbook/
public/images/_generated/collections/
public/images/_generated/brand/
```

These are staging areas. A file existing here does not mean it's approved
— see `approval-workflow.md`. Once Human Approval is recorded in a
candidate's Creative Brief, the file moves to the matching production
folder:

```
public/images/editorial/
public/images/products/
public/images/campaigns/
public/images/lookbook/
public/images/collections/
public/images/brand/
```

`public/images/_generated/` is never referenced by application code. If
you find an `import` or `<Image src>` pointing into `_generated/`, that's a
bug — either the asset was approved and should have been moved, or it
wasn't approved and shouldn't be wired up yet.

## Naming convention

Use descriptive, purpose-revealing names:

```
coffee-uganda-editorial-01.webp
uganda-craftsmanship-editorial-01.webp
continental-love-jewelry-campaign-01.webp
uganda-italy-cultural-campaign-01.webp
coffee-origin-editorial-01.webp
```

Never use meaningless names:

```
image1.png
final-final2.png
ai-image.png
```

Pattern: `<subject>-<location-or-theme>-<category>-<sequence>.<ext>`. The
sequence number matters once you have more than one candidate for the same
subject/theme — it keeps regenerations traceable back to their Creative
Brief instead of silently overwriting each other in `_generated/`.
