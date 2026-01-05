---
title: xhr：Inner Page Fetch
---

# xhr: Inner Page Fetch

When the original image only exists on an inner page, use `xhr` to fetch the inner page and parse the image.

## Structure Example

```js
xhr: {
  url: '.showcase__link',
  query: 'img[fetchpriority]'
}
```

## Field Description

| Field | Description |
| --- | --- |
| `url` | Inner page link (selector, regex, or function) |
| `query` | Inner page image selector or function |
| `caption` | Optional, description text |
| `headers` | Optional, request headers |
| `cacheNum` | Optional, cache count |

## Advanced: Function Form

```js
xhr: {
  url: function (a) {
    if (!a) return
    return a.href
  },
  query: function (html, doc) {
    let img = doc.querySelector('#img')
    return img && img.src
  }
}
```

## Return Value

- String: Single image.
- Array: Multiple images.
- Object: `{ url: [], cap: '' }`.

## Notes

- Inner page requests consume network resources, use only when necessary.
- Can be combined with `cacheNum` to reduce duplicate requests.