---
title: clickToOpen：Click to Open
---

# clickToOpen: Click to Open

`clickToOpen` is used to trigger opening the original image, current image, or magnifier via a click action.

## Example

```js
clickToOpen: {
  enabled: true,
  preventDefault: true,
  type: 'actual',
  button: 0,
  alt: false,
  ctrl: false,
  shift: false,
  meta: false
}
```

## Field Description

| Field | Description |
| --- | --- |
| `enabled` | Enable or disable |
| `preventDefault` | Prevent default click behavior |
| `type` | `actual` / `current` / `magnifier` |
| `button` | Mouse button (0/1/2) |
| `alt/ctrl/shift/meta` | Modifier keys requirement |

## Suggestions

For sites requiring click interactions, `clickToOpen` can replace hover triggers.