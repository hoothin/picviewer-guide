---
title: FAQ
---

# FAQ

## Float Bar Not Appearing

Possible causes and solutions:
- Image too small: Adjust `floatBar.forceShow.size` or `floatBar.minSizeLimit`.
- Image inside background: Enable `floatBar.listenBg`.
- Special site structure: Add `ext` or `getExtSrc` via rule system.

## Cannot Get Original Image

- Check if `r/s` replacement or `getImage` logic is needed.
- Use `xhr` rules for sites requiring inner page access.
- Specify `lazyAttr` for lazy loading sites.

## Incomplete Gallery Images

- Enable `gallery.loadAll` or `gallery.viewmoreEndless`.
- Use "Load More" command.
- Check for URL filter conditions.

## Download Fail or Timeout

- Increase `gallery.downloadGap`.
- Try aria2 download to reduce browser blocking.
- Some sites restrict cross-origin downloads; try batch copying links instead.

## Search by Image Popup Not Showing

- Check if the corresponding engine is enabled.
- Adjust `firstEngine` or update `gallery.searchData` in settings.