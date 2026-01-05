---
title: getExtSrc：Non-Image Source
---

# getExtSrc: Non-Image Element Retrieval

When the mouse hovers over a non-image element, `getExtSrc` can be used to return the image URL directly.

## Example: Find Image Near Button

```js
getExtSrc: function () {
  if (this.tagName === 'A' && this.className === 'msk') {
    return this.previousElementSibling.src.replace(/\?param=\d+y\d+/, '')
  }
}
```

## Return Value

- `string`: Single image URL.
- `array`: Multiple image URLs.

## Notes

`getExtSrc` is only triggered when the target is not an `img` element, suitable for scenarios like cards, buttons, or video covers.