---
title: Advanced Fields
---

# Advanced Fields

Advanced fields are used to improve rule hit rates and interaction experience.

## lazyAttr

Specify the lazy load attribute name.

```js
lazyAttr: 'data-original'
```

## exclude

Exclude certain image addresses to avoid false matches.

```js
exclude: /weixin_code\.png$/i
```

## description

Description field used in the gallery, supports selector or XPath.

```js
description: '.image-caption'
```

## clickToOpen

Used to specify click-to-open behavior.

```js
clickToOpen: {
  enabled: true,
  preventDefault: true,
  type: 'actual'
}
```

## When to Use Advanced Fields

- Lazy loading site: Prioritize `lazyAttr`.
- Need title or caption: Use `description`.
- Site requires click to open large image: Use `clickToOpen`.