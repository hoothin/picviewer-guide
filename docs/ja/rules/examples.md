---
title: ルール例
---

# ルール例

以下の例は、一般的なシナリオをカバーしており、すぐに始めるのに役立ちます。

## 1. サムネイルを元画像に置換

```js
{
  name: 'Dmm',
  src: /pics\.dmm\.co\.jp/i,
  r: 'ps.jpg',
  s: 'pl.jpg'
}
```

## 2. 遅延読み込みフィールドの解析

```js
{
  name: 'LazyLoad',
  url: /example\.com/,
  lazyAttr: 'data-original'
}
```

## 3. 内部ページ取得

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

## 4. 検索エンジンから元画像を取得

```js
{
  name: 'Google 画像検索',
  url: /https?:\/\/www.google(\.\w{1,3}){1,3}\/search\?.*&(tbm=isch|udm=2)/,
  getImage: function (a) {
    if (!a) return
    if (a.href.match(/imgurl=(.*?)&/i)) return decodeURIComponent(RegExp.$1)
  }
}
```

## 5. 単純なパラメータ削除

```js
{
  name: 'Bilibili',
  url: /^https?:\/\/[^.]+\.bilibili\.com/i,
  r: /\d+_x\d+\.jpg$|@\d+w_\d+h.*\.webp$|_\d+x\d+\.jpg$/i,
  s: ''
}
```

## 視覚的な例

![ルール図](/images/custom-rule.png)

```