---
title: Basic Fields
---

# Basic Fields

Basic fields are used to complete the most common replacement from "thumbnail to original image".

## name

Rule name, used for identification and debugging.

## url

Site matching rule. The rule only takes effect when the URL matches.

```js
url: /^https?:\/\/example\.com\//
```

## src

Image address matching rule. Often used to limit specific image domains or paths.

```js
src: /cdn\.example\.com\/thumb\//
```

## r / s

Replacement rule, supports string or regex. `r` is for matching, `s` is for replacement.

```js
r: /_thumb/,
s: '_large'
```

Supports arrays: multiple replacements are matched in order, array lengths must correspond.

```js
r: [/\/m(\d+)/, /thumb/],
s: ['/l$1', 'large']
```

Regex replacement supports groups: `$1`, `$2`, etc.

## enabled

Used to toggle rules.

```js
enabled: true
```

## example

Site example link, convenient for testing and maintenance.