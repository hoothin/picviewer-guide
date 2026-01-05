---
title: Internals
---

# Internals & Matching Process

The script continuously monitors mouse and image elements on the page, executing rule matching and image address resolution.

## Core Process

1. **Match Site**: Determine whether to enable the rule based on the `url` in the rule.
2. **Match Image**: Resolve the original image address based on `src`, `r/s`, or `getImage`.
3. **Handle Non-Image Elements**: Use `ext` or `getExtSrc` to find nearby images.
4. **Inner Page Fetch**: Use `xhr` to fetch inner pages and extract images when necessary.
5. **Return Result**: Pass the resolved URL to the float bar and gallery.

## Lazy Loading Handling

The script has built-in scanning for various lazy loading attributes and can automatically extract real image addresses from `data-*` attributes.
If the target site uses special fields, you can specify `lazyAttr` in the rule.

## Result Reuse

Resolved addresses are reused in subsequent operations, such as gallery collection, batch download, and search by image.