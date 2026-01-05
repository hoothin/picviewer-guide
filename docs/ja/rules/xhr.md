---
title: xhr：内部ページ取得
---

# xhr：内部ページ取得

元画像が内部ページにのみ存在する場合、`xhr` を使用して内部ページを取得し、画像を解析します。

## 構造例

```js
xhr: {
  url: '.showcase__link',
  query: 'img[fetchpriority]'
}
```

## フィールドの説明

| フィールド | 説明 |
| --- | --- |
| `url` | 内部ページリンク（セレクター、正規表現、または関数） |
| `query` | 内部ページ画像セレクターまたは関数 |
| `caption` | オプション、説明テキスト |
| `headers` | オプション、リクエストヘッダー |
| `cacheNum` | オプション、キャッシュ数 |

## 高度：関数形式

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

## 戻り値

- 文字列：単一画像。
- 配列：複数画像。
- オブジェクト：`{ url: [], cap: '' }`。

## 注意事項

- 内部ページリクエストはネットワークリソースを消費するため、必要な場合にのみ使用してください。
- 重複リクエストを減らすために `cacheNum` と組み合わせることができます。