---
title: 規則示例庫
---

# 規則示例庫

以下示例覆蓋常見場景，便於快速上手。

## 1. 縮略圖替換為原圖

```js
{
  name: 'Dmm',
  src: /pics\.dmm\.co\.jp/i,
  r: 'ps.jpg',
  s: 'pl.jpg'
}
```

## 2. 懶加載字段解析

```js
{
  name: 'LazyLoad',
  url: /example\.com/,
  lazyAttr: 'data-original'
}
```

## 3. 內頁抓取

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

## 4. 搜尋引擎取原圖

```js
{
  name: 'Google 圖片搜索',
  url: /https?:\/\/www.google(\.\w{1,3}){1,3}\/search\?.*&(tbm=isch|udm=2)/,
  getImage: function (a) {
    if (!a) return
    if (a.href.match(/imgurl=(.*?)&/i)) return decodeURIComponent(RegExp.$1)
  }
}
```

## 5. 簡單參數移除

```js
{
  name: 'Bilibili',
  url: /^https?:\/\/[^.]+\.bilibili\.com/i,
  r: /\d+_x\d+\.jpg$|@\d+w_\d+h.*\.webp$|_\d+x\d+\.jpg$/i,
  s: ''
}
```

## 規則可視化示例

![規則示意圖](/images/custom-rule.png)

```