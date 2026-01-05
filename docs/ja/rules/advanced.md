---
title: 高度なフィールド
---

# 高度なフィールド

高度なフィールドは、ルールのヒット率とインタラクション体験を向上させるために使用されます。

## lazyAttr

遅延読み込み属性名を指定します。

```js
lazyAttr: 'data-original'
```

## exclude

誤検知を避けるために特定の画像アドレスを除外します。

```js
exclude: /weixin_code\.png$/i
```

## description

ギャラリーで使用される説明フィールド。セレクターまたはXPathをサポートします。

```js
description: '.image-caption'
```

## clickToOpen

クリックして開く動作を指定するために使用されます。

```js
clickToOpen: {
  enabled: true,
  preventDefault: true,
  type: 'actual'
}
```

## 高度なフィールドを使用する場合

- 遅延読み込みサイト：`lazyAttr` を優先します。
- タイトルまたはキャプションが必要：`description` を使用します。
- 大きな画像を開くためにクリックが必要なサイト：`clickToOpen` を使用します。