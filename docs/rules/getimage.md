---
title: getImage：URL Rewrite
---

# getImage: URL Rewrite

`getImage` is used to get the original image address via JS, suitable for sites where simple replacement cannot solve the problem.

## Function Signature

```js
getImage(a, p) {}
```

- `a`: The first parent A element where the image is located (may be empty).
- `p`: Array of all parent elements.
- `this`: The current image element.

## Common Patterns

### Get from Link Parameters

```js
getImage: function (a) {
  if (!a) return
  if (a.href.match(/imgurl=(.*?)&/i)) {
    return decodeURIComponent(RegExp.$1)
  }
}
```

### Get via Data Attribute

```js
getImage: function () {
  return this.getAttribute('data-original')
}
```

### Return Multiple Images

```js
getImage: function () {
  return [this.src, this.src.replace('thumb', 'large')]
}
```

## Suggestions

- Returning `null` or `undefined` will continue to the subsequent logic.
- For complex sites, you can trigger events or parse DOM within the function.