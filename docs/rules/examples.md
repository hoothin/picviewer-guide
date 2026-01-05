---
title: Examples
---

# Rule Examples

The following examples cover common scenarios to help you get started quickly.

## 1. Replace Thumbnail with Original

```js
{
  name: 'Dmm',
  src: /pics\.dmm\.co\.jp/i,
  r: 'ps.jpg',
  s: 'pl.jpg'
}
```

## 2. Parse Lazy Load Field
```js
{
  name: 'LazyLoad',
  url: /example\.com/,
  lazyAttr: 'data-original'
}
```

## 3. Inner Page Fetch
```js
{
  name: 'Freepik',
  url: /^https?:\/\/www\.freepik\.com\//i,
  xhr: {
    url: '.showcase__link',
    query: 'img[fetchpriority]'
  }
}
```

## 4. Get Original from Search Engine
```js
{
  name: 'Google Image Search',
  url: /https?:\/\/www.google(\.\w{1,3}){1,3}\/search\?.*&(tbm=isch|udm=2)/,
  getImage: function (a) {
    if (!a) return
    if (a.href.match(/imgurl=(.*?)&/i)) return decodeURIComponent(RegExp.$1)
  }
}
```

## 5. Simple Parameter Removal
```js
{
  name: 'Bilibili',
  url: /^https?:\/\/[^.]+\.bilibili\.com/i,
  r: /\d+_x\d+\.jpg$|@\d+w_\d+h.*\.webp$|_\d+x\d+\.jpg$/i,
  s: ''
}
```

## Visual Example

![Rule Diagram](/images/custom-rule.png)

```