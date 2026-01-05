---
title: ext：Neighbor Element
---
# ext: Neighbor Element Capture

`ext` is used to try to get an image from nearby nodes when the mouse hovers over a non-image element.

## Supported Built-in Values

- `previous`: Previous sibling node.
- `previous-2`: Previous two sibling nodes.
- `next`: Next sibling node.

## Example

```js
ext: 'previous-2'
```

## Function Form

```js
ext: function (target) {
  if (target && target.previousElementSibling) {
    return target.previousElementSibling.querySelector('img')
  }
}
```

## Suggestions

When the page structure is stable, `ext` can quickly solve the image retrieval need when "hovering over a button or text".