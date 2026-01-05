---
title: getExtSrc：非画像取得
---

# getExtSrc：非画像要素からの取得

マウスが非画像要素上にホバーしている場合、`getExtSrc` を使用して画像URLを直接返すことができます。

## 例：ボタンの近くで画像を検索

```js
getExtSrc: function () {
  if (this.tagName === 'A' && this.className === 'msk') {
    return this.previousElementSibling.src.replace(/\?param=\d+y\d+/, '')
  }
}
```

## 戻り値

- `string`：単一画像のURL。
- `array`：複数画像のURL。

## 注意事項

`getExtSrc` はターゲットが `img` 要素でない場合にのみトリガーされ、カード、ボタン、ビデオカバーなどのシナリオに適しています。