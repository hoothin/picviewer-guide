---
title: Debugging
---

# Debugging

The goal of rule debugging is to confirm "whether the rule is hit" and "whether the returned URL is correct".

## Enable Debug

Enable `debug` in settings, and the browser console will output more matching information.

## Troubleshooting Steps

1. Confirm if `url` matches the target site.
2. Check if `src` / `lazyAttr` hits.
3. Verify `r/s` order and regex.
4. When using `xhr`, verify the selector and link.
5. Add logs inside `getImage` / `getExtSrc` for complex logic.

## Common Issues

- Still thumbnail after replacement: `r/s` match insufficient or order incorrect.
- Rule not effective: `url` too broad or too narrow.
- Inner page fetch failed: Selector outdated or cross-origin restriction.