---
title: getImage：URL書き換え
---

# getImage：URL書き換え

`getImage` は、単純な置換では解決できないサイトに適した、JSを介して元画像のアドレスを取得するために使用されます。

## 関数シグネチャ

```js
getImage(a, p) {}
```

- `a`：画像が配置されている最初の親A要素（空の場合があります）。
- `p`：すべての親要素の配列。
- `this`：現在の画像要素。

## 一般的なパターン

### リンクパラメータから取得

```js
getImage: function (a) {
  if (!a) return
  if (a.href.match(/imgurl=(.*?)&/i)) {
    return decodeURIComponent(RegExp.$1)
  }
}
```

### データ属性から取得

```js
getImage: function () {
  return this.getAttribute('data-original')
}
```

### 複数画像を返す

```js
getImage: function () {
  return [this.src, this.src.replace('thumb', 'large')]
}
```

## 提案

- `null` または `undefined` を返すと、後続のロジックが続行されます。
- 複雑なサイトの場合、関数内でイベントをトリガーしたり、DOMを解析したりできます。