---
title: getExtSrc：非圖元素取圖
---

# getExtSrc：非圖元素取圖

當鼠標懸停的是非圖片元素時，可用 `getExtSrc` 直接返回圖片 URL。

## 示例：從按鈕附近找圖

```js
getExtSrc: function () {
  if (this.tagName === 'A' && this.className === 'msk') {
    return this.previousElementSibling.src.replace(/\?param=\d+y\d+/, '')
  }
}
```

## 返回值

- `string`：單圖地址。
- `array`：多圖地址。

## 注意事項

`getExtSrc` 只在目標不是 `img` 元素時觸發，適用於卡片、按鈕或視頻封面等場景。