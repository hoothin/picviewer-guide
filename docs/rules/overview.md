---
title: Rule Overview
---

# Rule Overview

The rule system is responsible for converting thumbnails, lazy-loaded images, or inner page images into "downloadable original images". Rules are composed of multiple fields and are divided into two modes:

- JSON Mode: Pure data rules, safe and easy to maintain.
- JS Mode: Allows function logic, suitable for complex sites.

## Matching Process

1. Determine if the site matches based on `url` (no `url` implies all sites).
2. Get the original image based on `src`, `r/s`, or `getImage`.
3. If the target is not an image element, use `ext` or `getExtSrc`.
4. Use `xhr` when inner page fetching is needed.
5. Return the result to the float bar and gallery.

## Matching Priority

When multiple rules hit the same site, they are executed in order. Suggestions:

- Write specific site rules first (`url` restricted).
- Then write global general rules (`src` or `r/s`).

## Return Value Rules

- string: Single image URL.
- array: Multiple image URLs.
- object: `{ url: [], cap: '' }` format for returning images and descriptions simultaneously (common in `xhr`).

## Common Fields

| Field | Function |
| --- | --- |
| `name` | Rule Name |
| `url` | Site Match |
| `src` | Image Match |
| `r` / `s` | Replacement Rule |
| `lazyAttr` | Lazy Load Attribute |
| `ext` | Neighbor Element Image |
| `getImage` | JS Logic Image Retrieval |
| `getExtSrc` | Non-Image Element Retrieval |
| `xhr` | Inner Page Fetch |
| `clickToOpen` | Click to Open |
| `exclude` | Exclude Rule |

## Performance Tips

- Prefer `r/s` over `xhr` whenever possible.
- Use `xhr` only when necessary and limit `url` and selector scope as much as possible.
- The more precise the rule, the fewer false positives, and the more stable the overall performance.