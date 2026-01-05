---
title: ext：隣接要素
---
# ext：隣接要素のキャプチャ

`ext` は、マウスが非画像要素にホバーしたときに、近くのノードから画像を取得しようとするために使用されます。

## サポートされている組み込み値

- `previous`：前の兄弟ノード
- `previous-2`：前の2つの兄弟ノード
- `next`：次の兄弟ノード

## 例

```js
ext: 'previous-2'
```

## 関数形式

```js
ext: function (target) {
  if (target && target.previousElementSibling) {
    return target.previousElementSibling.querySelector('img')
  }
}
```

## 提案

ページ構造が安定している場合、`ext` は「ボタンやテキストの上にホバーしたとき」の画像取得のニーズを迅速に解決できます。