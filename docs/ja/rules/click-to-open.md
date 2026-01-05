---
title: clickToOpen：クリックして開く
---

# clickToOpen：クリックして開く

`clickToOpen` は、クリック操作によって元画像、現在の画像、または拡大鏡を開くトリガーとして使用されます。

## 例

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

## フィールドの説明

| フィールド | 説明 |
| --- | --- |
| `enabled` | 有効化するかどうか |
| `preventDefault` | デフォルトのクリック動作を防止 |
| `type` | `actual` / `current` / `magnifier` |
| `button` | マウスボタン（0/1/2） |
| `alt/ctrl/shift/meta` | 修飾キーの必要性 |

## 提案

クリックによるインタラクションが必要なサイトの場合、`clickToOpen` を使用してホバートリガーを置き換えることができます。